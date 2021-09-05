const express = require('express')
const redis = require('redis')
const { promisify } = require('util')

const client = redis.createClient('redis://localhost:6379')
client.get = promisify(client.get)
const next = require('next')

const app = next({ dev: false })
const handle = app.getRequestHandler()

const dataJsonPattern = /_next\/data\/.+\.json$/


const getJsonKey = (req) =>
  req.path
    .match(/\/([^\/]+)+/g)
    .slice(3)
    .join('')

const getSsrKey = (req) => {
  return req.url
}

async function jsonCache(req, res) {

  const key = getJsonKey(req)
  const cache = await client.get(key)

  if ( cache ) {
    const headersToWrite = {
      'content-type': 'application/json',
      'content-encoding': 'gzip'
    }
    const buffer = JSON.parse(cache, (k, v) => {
      if (
        v !== null &&
        typeof v === 'object' &&
        'type' in v &&
        v.type === 'Buffer' &&
        'data' in v &&
        Array.isArray(v.data) ) {
        return Buffer.from(v.data)
      }
      return v
    })
    Object.entries(headersToWrite).forEach(([ key, value ]) => res.setHeader(key, value))
    return res.send(buffer)
  }

  const rawResEnd = res.end
  const rawResWrite = res.write
  const rawResWriteHead = res.writeHead
  const chunks = []

  const proxyWrite = new Proxy(res.write, {
    apply(target, thisArg, args) {
      const chunk = Buffer.from(args[ 0 ], 'base64')
      chunks.push(chunk)
    }
  })
  const proxyWriteHead = new Proxy(res.writeHead, {
    apply(target, thisArg, args) {
    }
  })

  res.write = proxyWrite
  res.writeHead = proxyWriteHead

  const data = await new Promise(async (resolve) => {
    res.end = () => {
      resolve(chunks)
    }
    await app.render(req, res, req.path, {
      ...req.query,
      ...req.params
    })
  })

  res.write = rawResWrite
  res.writeHead = rawResWriteHead
  res.end = rawResEnd
  const response = Buffer.concat(data)

  if ( res.statusCode === 200 && data ) client.set(key, JSON.stringify(response))

  return res.send(response)
}

async function ssrCache(req, res) {
  const key = getSsrKey(req)

  const cache = await client.get(key)

  if ( cache ) {

    return res.send(cache)
  }

  const data = await app.renderToHTML(req, res, req.path, { ...req.query, ...req.params })

  if ( res.statusCode === 200 && data ) client.set(key, data)

  return res.send(data)

}

app.prepare().then(() => {

  const server = express()

  server.get('/', (req, res) => {
    return ssrCache(req, res)
  })

  server.get('/about', async (req, res) => {

    return ssrCache(req, res)
  })
  server.get('/_next/data/*', async (req, res) => {
    return jsonCache(req, res)
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(3000, (err) => {
    if ( err ) throw err
    console.log(`> Ready on http://localhost:3000`)
  })
})
