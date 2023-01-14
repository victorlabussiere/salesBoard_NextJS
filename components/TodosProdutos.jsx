import styles from '../styles/TodosProdutos.module.css'

export default function TodosProdutos() {
    return (
        <div className={styles.todosProdutos}>
            <header>
                <h2>Todos os Produtos</h2>
                <div className={styles.arrowArea}>
                    <i className='material-icons'>arrow_back</i>
                    <i className='material-icons'>arrow_forward</i>
                </div>
            </header>

            <table className={styles.tabelaProdutos}>
                <tr>
                    <th>IDENTIFICAÇÃO</th>
                    <th>PREÇO</th>
                    <th>VENDAS</th>
                    <th>ESTOQUE</th>
                    <th></th>
                </tr>
                <tr>
                    <td>
                        <div className={styles.itemDetails}>
                            <span className={styles.cardImage}></span>
                            <p>Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular</p>
                            <p>#MLB2063247364</p>
                        </div>
                    </td>

                    <td>
                        <p>R$ 31,67</p>
                    </td>

                    <td>
                        <p>Total de 4.750</p>
                        <p>150 vendas</p>
                    </td>

                    <td>
                        <p>0und.</p>
                    </td>
                    <td>
                        <i className='material-icons'>favorite</i>
                    </td>
                </tr>

            </table>

            <p>Pagina 1 de 10</p>
        </div>
    )
}