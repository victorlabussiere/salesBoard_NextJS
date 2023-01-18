import styles from './TodosProdutos.module.css'
import Card from './Card'

import { useEffect, useState } from 'react'

export default function TodosProdutos({ produtos }) {
    let [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        setFavoritos(prev => prev = produtos.filter(i => i.favorite === true))
    }, [Card])


    let [startPage, setStartPage] = useState(0)
    let currentPage = (startPage / 10) + 1
    let pageSize = 10
    let totalPages = Math.round(favoritos.length / 10)

    function previousPage() {
        if (currentPage <= 1) return;
        if (currentPage == totalPages) return setStartPage(prev => prev = prev - 10)
        return setStartPage(prev => prev - 10)
    }

    function nextPage() {
        if (favoritos.length <= pageSize) return
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
                            {favoritos.slice(startPage, startPage + pageSize).map(fav => {
                                return (<Card key={fav.id} produto={fav} statusPage={true} />)
                            })}
                        </tbody>
                    </table>
                    <p>Página {favoritos.length >= 1 ? favoritos.length / favoritos.length : 1} de {favoritos.length == 0 ? Math.round(favoritos.length / 10) : 1}</p>
                </>
                : (
                    <>
                        <h3>Você ainda não possui itens favoritos.</h3>
                        <i>Retorne para aba principal para adicionar itens aos favoritos clicando no ícone: &hearts;</i>
                    </>
                )
            }

        </div>
    )
}