import { IntlProvider, FormattedNumber } from 'react-intl'

import styles from './TodosProdutos.module.css'
import Image from 'next/image'

export default function Card({ produto, statusPage }) {
    function returnValue(value) {
        const locale = 'pt-Br'
        return (
            <strong>
                <IntlProvider locale={locale} message=''>
                    <FormattedNumber value={value} style='currency' currency='BRL'>
                    </FormattedNumber>
                </IntlProvider>
            </strong>
        )
    }

    function addToFav(body) {
        fetch('api/produtos/' + body.id, {
            method: 'PUT',
            body: JSON.stringify(body.favorite = !body.favorite),
            headers: {
                'Content-type': 'application/json;charset=utf0-8'
            }
        })
            .catch(err => console.error('erro ao favoritar', err.message))
    }

    return (
        <tr className={styles.rowData}>
            <td>
                <Image src={produto.picture} width={40} height={40} alt='imagem mockada' />
                <header>
                    <p><strong className='boldBlue'>{produto.name}</strong><br />#{produto.code} </p>
                    <p>ID: #{produto.id}</p>
                </header>
            </td>

            <td>
                <p>{returnValue(produto.price)}</p>
            </td>

            <td>
                <p>Faturamento total: {returnValue(produto.sales * produto.price)}</p>
                <p>Quantidade de vendas: {produto.sales}</p>
            </td>

            <td>
                <p>{produto.stock} und.</p>
            </td>
            <td>
                <i className={produto.favorite ? 'material-icons fav' : 'material-icons'} onClick={async (e) => {
                    e.target.classList.toggle('fav')
                    if (produto.favorite) {
                        if (!statusPage) return
                        e.target.parentNode.parentNode.remove()
                    }
                    return await addToFav(produto)
                }}>favorite</i>
            </td>
        </tr >)
}