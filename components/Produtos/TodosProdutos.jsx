import styles from './TodosProdutos.module.css'
import Card from './Card'

import { useEffect, useState } from 'react'

export default function TodosProdutos({ produto }) {
    const produtos = produto

    let [startPage, setStartPage] = useState(0)
    let currentPage = (startPage / 10) + 1
    let pageSize = 10
    let totalPages = Math.round(produtos.length / 10)

    function previousPage() {
        if (currentPage === 1) return;
        return setStartPage(prev => prev - 10)
    }

    function nextPage() {
        if (currentPage === totalPages) return
        setStartPage(prev => prev + 10)
        return;
    }

    return (
        <div className={styles.todosProdutos}>
            <header>
                <h2>Todos os Produtos</h2>
                <div className={styles.arrowArea}>

                    <button id='prev' onClick={previousPage}>
                        <i className='material-icons'>arrow_back</i>
                    </button>

                    <button id='next' onClick={nextPage}>
                        <i className='material-icons'>arrow_forward</i>
                    </button>
                </div>
            </header>

            {produtos.length !== 0 ?
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
                        {produtos.sort((a, b) => a.id - b.id).slice(startPage, pageSize + startPage).map((p) => {
                            return (<Card key={p.id} produto={p} />)
                        })}
                    </tbody>

                </table>
                : (
                    <>
                        <h3>Você ainda não possui nenhum item</h3>
                        <i>Adicione itens clicando no botão 'Criar'</i>
                    </>
                )}

            <p>Página {Number.parseInt(startPage / 10 + 1)} de {Math.round(produto.length / pageSize) + 1}</p>
        </div>
    )
}