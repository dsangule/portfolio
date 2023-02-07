import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Devansh Sangule | Contact</title>
        <meta name="description" content="Portfolio website by Devansh Sangule" />
        <link rel="icon" href="/TempIcon.png" />
      </Head>
      <main>
        <h1 className={styles.title}>Contact</h1>
      </main>
    </div>
  )
}
