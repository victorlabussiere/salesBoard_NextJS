import MaisVendidos from '../components/MaisVendidos/MaisVendidos'
import TodosProdutos from '../components/TodosProdutos/TodosProdutos'
import Favoritos from '../components/Favoritos/Favoritos'

import Navbar from '../components/Layout/Navbar'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let [favPag, setFavPag] = useState(false)

  function setTodas() {
    setFavPag(prev => prev = false)
    document.getElementById('todasB').className = 'pButton'
    document.getElementById('favsB').className = 'sButton'
    return;
  }

  function setFav() {
    setFavPag(prev => prev = true)
    document.getElementById('todasB').className = 'sButton'
    document.getElementById('favsB').className = 'pButton'
    return;
  }

  return (
    <>
      <Navbar />

      <nav className={styles.clientNav}>
        <div className={styles.buttonsArea}>
          <button id='todasB' onClick={setTodas} className='pButton'>Todas</button>
          <button id='favsB' onClick={setFav} className='sButton'>Favoritos</button>
        </div>
        <button className='pButton'> Criar Novo</button>
      </nav >

      {/* content */}
      <section className={`${styles.homeContainer} ${inter.className}`}>
        <MaisVendidos />
        {!favPag ? <TodosProdutos /> : <Favoritos />}
      </section>
    </>
  )
}
