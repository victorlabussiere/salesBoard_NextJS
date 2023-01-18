import styles from './TodosProdutos.module.css'
import Card from './Card'

import { useEffect, useState } from 'react'

export default function TodosProdutos({ produtos }) {
    let [favoritos, setFavoritos] = useState([])
    useEffect(() => {
        setFavoritos(prev => prev = (produtos.filter(i => i.favorite === true)))
    }, [])

    let [currentPage, setCurrentPage] = useState(1)
    let [startPage, setStartPage] = useState(0)
    let pageSize = 10
    let totalPages = favoritos.length / 10

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
                <h2>Favoritos</h2>
                <div className={styles.arrowArea}>

                    <button id='prev' onClick={previousPage}>
                        <i className='material-icons'>arrow_back</i>
                    </button>

                    <button id='next' onClick={nextPage}>
                        <i className='material-icons'>arrow_forward</i>
                    </button>
                </div>
            </header>

            {favoritos.length != 0 ?
                <>

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
                            {favoritos.slice(startPage, pageSize + startPage).map(fav => {
                                return (<Card key={fav.id} produto={fav} statusPage={true} />)
                            })}
                        </tbody>
                    </table>

                    <p>Página {favoritos.length == 0 ? 1 : currentPage} de {favoritos.length == 0 ? 1 : favoritos.length / 10 <= Math.floor(favoritos.length / favoritos.length + 1) ? 2 : Math.floor(favoritos.length / 10)}</p>
                </>
                : (
                    <>
                        <h3>Você ainda não possui itens favoritos.</h3>
                        <i>Clique no ícone <strong> &hearts; </strong> para adicionar um item a sua lista de favoritos.</i>
                    </>
                )
            }

        </div>
    )
}