import Image from "next/image"
import styles from './MaisVendidos.module.css'

import { IntlProvider, FormattedNumber } from "react-intl"
const locale = "pt-BR";

export default function CardMais({ produto }) {
    return (
        <div className={styles.cardsArea}>

            <div className={styles.card}>
                <Image className={styles.cardImage} src={produto.picture} width={168} height={148} alt='Iphone 14' />
                <div className={styles.itemDetails}>
                    <p>
                        <IntlProvider locale={locale} messages='' >
                            <FormattedNumber value={produto.price} style='currency' currency="BRL" minimumFractionDigits={2}>
                            </FormattedNumber>
                        </IntlProvider>
                    </p>
                    <p>{produto.sales} Vendas</p>
                </div>
                <h3>{produto.name}</h3>
                <p>Id: {produto.id}</p>
            </div>
        </div>
    )
}