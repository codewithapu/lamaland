import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import NavBar from '@/components/NavBar'
import Card from '@/components/Card'

export default function Home() {
  return (
    <>

      <div className={styles.Hero}>
        <Head>
          <title>Lama Land</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar />

      </div>

      <div className={styles.Dishes}>
        <Card/>
      </div>
    </>
  )
}
