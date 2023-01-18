import Image from 'next/image'
import styles from '../../styles/Navbar.module.css'
import { Inter } from '@next/font/google'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {

    return (
        <nav className={`${styles.navContainer} ${inter.className}`}>
            <header className={styles.header}>
                <h2>xco<span>+</span></h2>
                <div className={styles.profilePic}>
                    <Image src='/images/profilePic.webp' width={30} height={30} alt='mock profile pic' />
                    <i className='material-icons'>expand_more</i>
                </div>
            </header>

        </nav >
    )
}

