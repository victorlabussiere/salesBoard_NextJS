import styles from './TodosProdutos.module.css'
import Card from './Card'

import { useEffect, useState } from 'react'

export default function TodosProdutos({ produto }) {
    const produtos = produto

    let [currentPage, setCurrentPage] = useState(1)
    let [startPage, setStartPage] = useState(0)
    let pageSize = 10
    let totalPages = produtos.length / 10

    function previousPage() {
        if (currentPage == 1) return;
        setCurrentPage(prev => prev = prev - 1)
        return setStartPage(prev => prev - 10)
    }

    function nextPage() {
        if (currentPage === Math.ceil(totalPages)) return;
        setCurrentPage(p => p = p + 1)
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
                        <i>Adicione itens clicando no botão &apos;Criar&apos;</i>
                    </>
                )}

            <p>Página {produtos.length == 0 ? 1 : currentPage} de {produtos.length == 0 ? 1 : produtos.length / 10 <= Math.floor(produto.length / produto.length + 1) ? 2 : Math.floor(produtos.length / 10)}</p>
        </div>
    )
}