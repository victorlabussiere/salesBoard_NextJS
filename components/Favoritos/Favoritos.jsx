import styles from './Favoritos.module.css'
import CardFavs from './CardFavs'

import { createServer } from 'miragejs'
import { useEffect, useState } from 'react'


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

export default function TodosProdutos() {
    let [startPage, setStartPage] = useState(0)
    let [produtos, setProdutos] = useState([])
    let currentPage = (startPage / 10) + 1

    if (currentPage > 10) currentPage = 11
    useEffect(() => {
        fetch(`api/produtos`)
            .then(res => res.json())
            .then(data => data.produtos)
            .then(arr => setProdutos(arr.slice(startPage, 10 + startPage)))
            .catch(err => console.error('erro GET', err.message))
    }, [startPage])

    return (
        <div className={styles.todosProdutos}>
            <div className={styles.header}>
                <h2>Produtos Favoritos</h2>
                <div className={styles.arrowArea}>

                    <button id='prev' onClick={() => {
                        if (currentPage <= 1) return;
                        if (currentPage === 11) return setStartPage(prev => prev = 90)
                        return setStartPage(prev => prev - 10)
                    }}>
                        <i className='material-icons'>arrow_back</i>
                    </button>

                    <button id='next' onClick={() => {
                        if (startPage >= arr.length - 9) return
                        setStartPage(prev => prev + 10)
                    }}>
                        <i className='material-icons'>arrow_forward</i>
                    </button>
                </div>
            </div>

            <table className={styles.tabelaProdutos}>
                <thead>
                    <tr>
                        <th>IDENTIFICAÇÃO</th>
                        <th>PREÇO</th>
                        <th>VENDAS</th>
                        <th>ESTOQUE</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map(p => {
                        return (<CardFavs key={p.id} produto={p} />)
                    })}
                </tbody>

            </table>

            <p>Página {Number.parseInt(currentPage)} de {Number.parseInt(arr.length / 10)}</p>
        </div>
    )
}