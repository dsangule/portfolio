import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Intro from '@/components/Intro'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Devansh Sangule | Home</title>
        <meta name="description" content="Portfolio website by Devansh Sangule" />
        <link rel="icon" href="/TempIcon.png" />
      </Head>
      <Intro />
    </div>
  )
}
