import Navbar from "./Navbar"
import Footer from './Footer'
import { Inter } from "@next/font/google"

import styles from '../styles/Layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className={`${inter.className} ${styles.main}`}>
                {children}
            </main>
            <Footer />
        </>
    )
}