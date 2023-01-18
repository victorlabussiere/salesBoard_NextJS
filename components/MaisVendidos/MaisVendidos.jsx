import { useState, useEffect, use } from 'react'
import styles from './MaisVendidos.module.css'
import CardMais from './CardMais'


export default function MaisVendidos({ produtos }) {
    let [currentPage, setCurrentPage] = useState(1)
    let [startPage, setStartPage] = useState(0)
    let pageSize = 6
    let totalPages = produtos.length / 6

    function previousPage() {
        if (currentPage == 1) return;
        setCurrentPage(prev => prev = prev - 1)
        return setStartPage(prev => prev - 10)
    }

    function nextPage() {
        if (currentPage === Math.ceil(totalPages)) return;
        setCurrentPage(p => p = p + 1)
        setStartPage(prev => prev + 6)
        return;
    }
    return (
        <div className={styles.maisVendidos}>
            <header>
                <h2>Mais vendidos</h2>
                <div className={styles.arrowArea}>

                    <button id='prev' onClick={previousPage}>
                        <i className='material-icons'>arrow_back</i>
                    </button>

                    <button id='next' onClick={nextPage}>
                        <i className='material-icons'>arrow_forward</i>
                    </button>
                </div>
            </header >
            {produtos.length != 0 ?
                <>
                    <div className={styles.cardsArea}>
                        {produtos.sort((a, b) => b.sales - a.sales).slice(startPage, pageSize + startPage).map((p) => {
                            return (<CardMais key={p.id} produto={p} />)
                        })}
                    </div>
                    <p>Página {produtos.length == 0 ? 1 : currentPage} de {produtos.length == 0 ? 1 : produtos.length / 10 <= Math.floor(produtos.length / produtos.length + 1) ? 2 : Math.floor(produtos.length / 6) + 1}</p>
                </>
                : (<>
                    <h3>Nenhum item disponível por enquanto</h3>
                </>)}
        </div >
    )
}