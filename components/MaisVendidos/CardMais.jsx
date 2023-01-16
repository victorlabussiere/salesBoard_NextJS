import Image from "next/image"
import styles from './MaisVendidos.module.css'

export default function CardMais({ produto }) {
    return (
        <div className={styles.cardsArea}>

            <div className={styles.card}>
                <Image className={styles.cardImage} src={produto.picture} width={168} height={148} alt='Iphone 14' />
                <div className={styles.itemDetails}>
                    <p>R$ <strong>{produto.price}</strong></p> <p>{produto.sales} Vendas</p>
                </div>
                <h3>{produto.name}</h3>
                <p>Id: {produto.id}</p>
            </div>
        </div>
    )
}