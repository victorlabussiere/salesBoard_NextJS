import { createServer } from 'miragejs'
import { useState, useEffect, use } from 'react'

import styles from './MaisVendidos.module.css'
import CardMais from './CardMais'

var arr = []
for (let i = 0; i <= 99; i++) {
    arr.push(
        {
            id: `${i + 1}`,
            name: 'Iphone 14',
            code: `MLB${i + 1}`,
            price: 8000,
            sales: 30,
            stock: 3,
            picture: '/images/iphone14.jpg',
            favorite: false
        }
    )
}

createServer({
    routes() {
        this.namespace = 'api'
        this.get(`/produtos`, () => {
            return { produtos: arr }
        })
    }
})

export default function MaisVendidos() {
    let [startPage, setStartPage] = useState(0)
    let [produtos, setProdutos] = useState([])
    let currentPage = (startPage / 10) + 1

    if (currentPage > 10) currentPage = 11
    useEffect(() => {
        fetch(`api/produtos`)
            .then(res => res.json())
            .then(data => data.produtos)
            .then(arr => setProdutos(arr.slice(startPage, 6 + startPage)))
            .catch(err => console.error('erro GET', err.message))
    }, [startPage])

    return (
        <div className={styles.maisVendidos}>
            <header>
                <h2>Mais vendidos</h2>
                <div className={styles.arrowArea}>

                    <button id='prev' onClick={() => {
                        if (currentPage <= 1) return;
                        if (currentPage === 11) return setStartPage(prev => prev = 90)
                        return setStartPage(prev => prev - 10)
                    }}>
                        <i className='material-icons'>arrow_back</i>
                    </button>

                    <button id='next' onClick={() => {
                        if (startPage >= arr.length - 10) return setStartPage(prev => prev + 4)
                        setStartPage(prev => prev + 10)
                    }}>
                        <i className='material-icons'>arrow_forward</i>
                    </button>
                </div>
            </header >

            <div className={styles.cardsArea}>
                {produtos.map((p) => {
                    return (<CardMais key={p.id} produto={p} />)
                })}
            </div>
            <p>Página {Number.parseInt(currentPage)} de {Number.parseInt(arr.length / 10) + 1}</p>
        </div >
    )
}