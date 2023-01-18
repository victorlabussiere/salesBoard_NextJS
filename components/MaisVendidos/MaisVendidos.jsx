import { useState, useEffect, use } from 'react'
import styles from './MaisVendidos.module.css'
import CardMais from './CardMais'


export default function MaisVendidos({ produtos }) {
    let [startPage, setStartPage] = useState(0)

    let currentPage = Math.round(startPage / 10) + 1
    let pageSize = 6
    let totalPages = Math.round(produtos.length / 6 - 6)

    function previousPage() {
        if (currentPage == 1) return;
        return setStartPage(prev => prev - pageSize)
    }

    function nextPage() {
        if (currentPage >= (produtos.length / pageSize)) return
        if (currentPage === totalPages) return
        return setStartPage(prev => prev += pageSize)
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
                    <p>Página {Math.round(currentPage)} de {totalPages <= 1 ? 1 : totalPages}</p>
                </>
                : (<>
                    <h3>Nenhum item disponível por enquanto</h3>
                </>)}
        </div >
    )
}