import Navbar from '../components/Layout/Navbar'
import MaisVendidos from '../components/MaisVendidos/MaisVendidos'
import TodosProdutos from '../components/Produtos/TodosProdutos'
import Favoritos from '../components/Produtos/Favoritos'
import CriarProduto from '../components/CriarProduto/CriarProduto'

import { useEffect, useState } from 'react'
import { createServer } from 'miragejs'

import styles from '../styles/Home.module.css'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

let arrTotal = []
for (let i = 0; i <= 3; i++) {
  arrTotal.push({
    id: `${i + 1}`,
    code: `MLB${i + 1}`,
    name: 'Iphone 14',
    price: 8000 + i,
    sales: 0 + i,
    stock: 3,
    picture: '/images/iphone14.jpg',
    favorite: false
  })
}

createServer({
  routes() {
    this.namespace = 'api'

    this.get(`/produtos/`, () => {
      return {
        produtos: arrTotal,
      }
    })

    this.post('/produtos/', (s, request) => {
      const data = request.requestBody
      const attrs = JSON.parse(data)
      return arrTotal.push(attrs)
    })

    this.put('/produtos/:id', (schema, request) => {
      let id = request.params.id
      let attrs = JSON.parse(request.requestBody)

      return schema.produtos.find(id).update(attrs)
    })

  }
})

export default function Home() {
  // Navegação:
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
  // Busca de produtos
  let [query, setQuery] = useState('')
  const search = function () {
    let item = produtos.filter(p => {
      return p.code.toLowerCase().includes(query.toLocaleLowerCase())
    })
    produtos = item
    return produtos
  }

  // MirageJS server
  let [produtos, setProdutos] = useState([])
  let [criar, setCriar] = useState(false)
  let [get, setGet] = useState(false)

  useEffect(() => {
    fetch('api/produtos/')
      .then(res => res.json())
      .then(async data => {
        await setProdutos(data.produtos)
      })
      .catch(err => console.error('Mirage error', err))
  }, [criar, favPag, modal.classList])
  search()

  return (
    <>
      < Navbar />

      <div className={styles.productsArea}>
        <h1>Produtos</h1>
        <div className={styles.inputArea}>
          <i className='material-icons'> search</i>
          <input
            id='queryItens'
            type="text"
            className={styles.navInput}
            placeholder="Buscar pelo código"
            onChange={(e) => {
              let input = document.getElementById('queryItens')
              setQuery(input.value)
            }}
          />
        </div>
      </div>

      <nav className={styles.clientNav}>

        <div className={styles.buttonsArea}>
          <button id='todasB' onClick={setTodas} className='pButton'>Todas</button>
          <button id='favsB' onClick={setFav} className='sButton'>Favoritos</button>
        </div>

        <button id='criarB' className='pButton' onClick={() => {
          let modal = document.getElementById('modal')
          setCriar(prev => prev = !prev)
          return modal.classList = 'modal On'
        }}>
          Criar
        </button>
      </nav >

      <section className={`${styles.homeContainer} ${inter.className}`}>
        <MaisVendidos produtos={produtos} />
        {!favPag ? <TodosProdutos produto={produtos} /> : <Favoritos produtos={produtos} />}

        <div id='modal' className='modal'>
          <CriarProduto status={criar} />
        </div>

      </section>
    </>
  )
}
