const express = require('express')
const next = require('next')
const { promisify } = require('util')

const client = redis.createClient('redis://localhost:6379')
client.get = promisify(client.get)

const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare().then(() => {

  const server = express()

  server.get('*', (req, res) => handle(req, res))

  server.listen(3000, (err) => {
    if ( err ) throw err
    console.log(`> Ready on http://localhost:3000`)
  })
})
