import Image from 'next/image'
import styles from '../../styles/Navbar.module.css'
import { Inter } from '@next/font/google'
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

            <section className={styles.productsArea}>
                <h1>Produtos</h1>
                <div className={styles.inputArea}>
                    <i className='material-icons'> search</i>
                    <input
                        id='queryItens'
                        type="text"
                        className={styles.navInput}
                        placeholder="Buscar por produtos"
                    />
                </div>
            </section>
        </nav >
    )
}

