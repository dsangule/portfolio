import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navIconFlex}>
        <div className={styles.navIcon}>
          <Image src='/TempIcon.png' width={40} height={40}></Image>
        </div>
      </div>
      <ul>
        <Link href={'/'}>
          <li>Home</li>
        </Link>
        <Link href={'/about'}>
          <li>About</li>
        </Link>
        <Link href={'/contact'}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar