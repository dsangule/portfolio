import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <ul>
          <li>Home</li>
          <li>About Me</li>
          <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar