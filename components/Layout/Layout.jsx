import { Inter } from "@next/font/google"
const inter = Inter({ subsets: ['latin'] })

import Footer from "./Footer"
import styles from '../../styles/Layout.module.css'

export default function Layout({ children }) {
    return (
        <>
            <main className={`${inter.className} ${styles.main}`}>
                {children}
            </main>
            <Footer />
        </>
    )
}