import React from 'react'
import styles from '../styles/Intro.module.css'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className={styles.container}>
        <div className={styles.card}>
            <h1 className={styles.title}>
                <span className={styles.brand}>DevanshS</span> Lorem ipsum
            </h1>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, atque!
            </p>
            <button className={styles.button}>DISCOVER</button>
        </div>
        <div className={styles.card}>
            <Image src='/img/Avocado.png' fill></Image>
        </div>
    </div>
  )
}

export default Intro