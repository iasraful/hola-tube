import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header/Header'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hola-Tube</title>
      </Head>

      {/* header */}
      <Header/>
      {/* Nav */}

      {/* Results */}
    </div>
  )
}
