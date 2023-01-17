import styles from './Favoritos.module.css'
import Image from 'next/image'

import { IntlProvider, FormattedNumber } from 'react-intl'
const locale = 'pt-Br'
export default function CardTodos({ produto }) {

    function returnValue(value) {
        return (<IntlProvider locale={locale} message=''>
            <FormattedNumber value={value} style='currency' currency='BRL'>
            </FormattedNumber>
        </IntlProvider>)
    }

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
                <p>
                    {returnValue(produto.price)}
                </p>
            </td>

            <td>
                <p><strong>Faturamento total: {returnValue(produto.price * produto.sales)}</strong></p>
                <p>Total de Vendas: {produto.sales}</p>
            </td>

            <td>
                <p>{produto.stock} und.</p>
            </td>
            <td>
                <i className='material-icons'>favorite</i>
            </td>
        </tr >)
}