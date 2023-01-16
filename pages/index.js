import styles from '../styles/Home.module.css'

import MaisVendidos from '../components/MaisVendidos/MaisVendidos'
import TodosProdutos from '../components/TodosProdutos/TodosProdutos'

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <section className={`${styles.homeContainer} ${inter.className}`}>
      <MaisVendidos />
      <TodosProdutos />
    </section>
  )
}
