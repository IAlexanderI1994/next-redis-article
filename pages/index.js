import styles from '../styles/Home.module.css'
import Link from "next/link"

export const getServerSideProps = async ({ params }) => {
  console.log('MAIN')
  return {
    props: {
      test: 'main'
    }
  }
}

export default function Home() {
  return (
    <div className={styles.container}>

      <Link href="/about" as={'/about'} passHref>
        About
      </Link>
    </div>
  )
}
