import styles from './TodosProdutos.module.css'
import Image from 'next/image'

export default function CardTodos({ produto }) {

    return (
        <tr className={styles.rowData}>
            <td>
                <div >
                    <Image src={produto.picture} width={40} height={40} alt='imagem mockada' />
                    <p>{produto.name} <br /><strong className='boldBlue'>#{produto.code}</strong></p>
                    <p>id: {produto.id}</p>
                </div>
            </td>

            <td>
                <p>R$ <strong>{produto.price}</strong></p>
            </td>

            <td>
                <p><strong>Faturamento total: R${produto.sales * produto.price},00</strong></p>
                <p>de {produto.sales} vendas</p>
            </td>

            <td>
                <p>{produto.stock} und.</p>
            </td>
            <td>
                <i className='material-icons'>favorite</i>
            </td>
        </tr >)
}