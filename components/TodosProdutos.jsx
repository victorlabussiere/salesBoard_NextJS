import styles from '../styles/TodosProdutos.module.css'
import Image from 'next/image'

export default function TodosProdutos() {
    return (
        <div className={styles.todosProdutos}>
            <div className={styles.header}>
                <h2>Todos os Produtos</h2>
                <div className={styles.arrowArea}>
                    <i className='material-icons'>arrow_back</i>
                    <i className='material-icons'>arrow_forward</i>
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
                    <tr>
                        <td>
                            <Image src='/images/mockImage.webp' width={40} height={40} alt='imagem mockada' className={styles.image} />
                            <div className={styles.rowData}>
                                <p>Kit 10 Un. Adesivo 3m Porta Cartão De Silicone Para Celular
                                    <br /><strong className='boldBlue'>#MLB2063247364</strong>
                                </p>
                            </div>
                        </td>

                        <td>
                            <p>R$ 31,67</p>
                        </td>

                        <td>
                            <p><strong>Total de 4.750</strong></p>
                            <p>150 vendas</p>
                        </td>

                        <td>
                            <p>0 und.</p>
                        </td>
                        <td>
                            <i className='material-icons'>favorite</i>
                        </td>
                    </tr>
                </tbody>

            </table>

            <p>Pagina 1 de 10</p>
        </div>
    )
}