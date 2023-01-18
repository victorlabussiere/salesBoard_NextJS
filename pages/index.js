import Navbar from '../components/Layout/Navbar'
import MaisVendidos from '../components/MaisVendidos/MaisVendidos'
import TodosProdutos from '../components/Produtos/TodosProdutos'
import Favoritos from '../components/Produtos/Favoritos'

import { useEffect, useState } from 'react'
import { createServer, Model } from 'miragejs'

import styles from '../styles/Home.module.css'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

createServer({
  models: {
    produtos: Model
  },

  routes() {
    this.namespace = 'api'
    this.get(`/produtos/`, (s, res) => {
      return s.produtos.all()
    })

    this.post('/produtos/', (s, request) => {
      const data = request.requestBody
      const attrs = JSON.parse(data)
      return s.produtos.create(attrs)
    })

    this.put('/produtos/:id', (schema, request) => {
      let id = request.params.id
      let attrs = JSON.parse(request.requestBody)
      return schema.produtos.find(id).update(attrs)
    })
  },

  seeds(server) {
    for (let i = 0; i <= 99; i++) {
      server.create('produto', {
        name: 'Iphone 14',
        code: `MLB${i + 1}`,
        price: 8000,
        sales: `${i + 1}`,
        stock: 3,
        favorite: false,
        picture: '/images/iphone14.jpg'
      })
    }
  }

})

export default function Home() {
  let [produtos, setProdutos] = useState([])

  // Navegação entre Componentes:
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
      return p.name.toLowerCase().includes(query.toLocaleLowerCase())
    })
    produtos = item
    return produtos
  }
  search()

  // MODAL
  let [name, setName] = useState()
  let [code, setCode] = useState()
  let [sales, setSales] = useState()
  let [stock, setStock] = useState()
  let [price, setPrice] = useState()

  const data = {
    name,
    code: 'MLB' + code + produtos.length + 1,
    sales,
    stock,
    price,
    favorite: false,
    picture: '/images/iphone14.jpg'
  }

  function postItem(body) {
    return fetch('api/produtos', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(() => {
        var inputs = document.getElementsByTagName('input')
        Object.values(inputs).forEach(e => e.value = '') // Limpando todos os Inputs do formulário.
        alert('Item criado com sucesso')  // Feedback de sucesso no POST        
      })
      .then(() => {
        let modal = document.getElementById('modal')
        modal.classList = 'modal' // fechando Modal
        return setTodas()
      })
      .catch(err => console.error('POST error', err.message))
  }

  // MirageJS server GET DATA
  useEffect(() => {
    fetch('api/produtos/')
      .then(res => res.json())
      .then(data => {
        return setProdutos(data.produtos)
      })
      .catch(err => console.error('Mirage error', err))
  }, [favPag]) // Os componentes são atualizados durante a navegação.

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
            placeholder="Buscar por produtos"
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
          return modal.classList = 'modal On'
        }}>Criar </button>

      </nav >

      <section className={`${styles.homeContainer}`}>
        <MaisVendidos produtos={produtos} />
        {!favPag ? <TodosProdutos produto={produtos} /> : <Favoritos produtos={produtos} />}

        <div id='modal' className='modal'>

          <div id='containerModal' className={styles.criarContainer}>
            <div className={styles.contentArea}>

              <header>
                <h1> Adicionando novo Produto</h1>
                <i className='material-icons closeModal' onClick={(e) => {
                  let modal = document.getElementById('modal')
                  modal.classList = 'modal'
                }}>close</i>
              </header>

              <form className={styles.formContainer}>
                <label htmlFor="nomeProduto"> <h4>Nome do produto</h4>
                  <input required name='nomeProduto' type="text" placeholder='Digite o nome do produto' onChange={(e) => {
                    let value = e.target.value
                    setName(prev => prev = value)
                  }} />
                </label>

                <fieldset>
                  <label htmlFor="codeProduto"> <h4>Código</h4>
                    <input required name='codeProduto' type="number" placeholder='MLB...' onChange={(e) => {
                      let value = e.target.value
                      setCode(prev => prev = value)
                    }} />
                  </label>
                  <label htmlFor="stockProduto"> <h4>Total no estoque</h4>
                    <input required name='stockProduto' type="number" placeholder='Digite a quantidade de itens disponíveis' onChange={(e) => {
                      let value = e.target.value
                      setStock(prev => prev = value)
                    }} />
                  </label>
                </fieldset>

                <fieldset>
                  <label htmlFor="salesProduto"> <h4>Número de vendas</h4>
                    <input required name='salesProduto' type="number" placeholder='Digite o total de vendas' onChange={(e) => {
                      let value = e.target.value
                      setSales(prev => prev = value)
                    }} />
                  </label>

                  <label htmlFor="priceProduto"> <h4>Preço</h4>
                    <input required name='priceProduto' type="number" placeholder='Digite o total de vendas' onChange={(e) => {
                      let value = e.target.value
                      setPrice(prev => prev = value)
                    }} />
                  </label>
                </fieldset>

              </form>

              <button name="button" id="sbmt" onClick={() => {
                const allIn = document.getElementsByTagName('input')
                const inputs = Object.values(allIn).slice(1)

                var count = 0
                inputs.forEach(input => {
                  if (!input.value) return count = count + 1
                  return count
                })
                console.log('counnt', count)

                if (count != 0) { alert('Preencha todos os campos para seguir com\no cadastro do produto') }
                else if (count === 0) {
                  setTodas()
                  setFav()
                  return postItem(data)
                }
                // return postItem(data)
              }}> Enviar</button>

            </div>
          </div >
        </div>

      </section>
    </>
  )
}
