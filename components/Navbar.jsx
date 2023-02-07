import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.link}>
        DevanshS
      </Link>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href='/products/design' className={styles.link}>
            Design
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/products/development' className={styles.link}>
            Development
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/products/production' className={styles.link}>
            Production
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/products/photography' className={styles.link}>
            Photography
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href='/products/contact' className={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar