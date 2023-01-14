import styles from '../styles/MaisVendidos.module.css'

export default function MaisVendidos() {
    return (
        <div className={styles.maisVendidos}>
            <header>
                <h2>Mais vendidos</h2>
                <div className={styles.arrowArea}>
                    <i className='material-icons'>arrow_back</i>
                    <i className='material-icons'>arrow_forward</i>
                </div>
            </header>

            <div className={styles.cardsArea}>
                <div className={styles.card}>
                    <span className={styles.cardImage}></span>
                    <div className={styles.itemDetails}>
                        <p className={styles.cardPrice}>R$ 31,67</p>
                        <p className={styles.cardSales}>203 vendas</p>
                    </div>
                    <h3>Kit 10 Un. Adesivo{" (...)"}</h3>
                </div>

                <div className={styles.card}>
                    <span className={styles.cardImage}></span>
                    <div className={styles.itemDetails}>
                        <p className={styles.cardPrice}>R$ 31,67</p>
                        <p className={styles.cardSales}>203 vendas</p>
                    </div>
                    <h3>Kit 10 Un. Adesivo{" (...)"}</h3>
                </div>
                <div className={styles.card}>
                    <span className={styles.cardImage}></span>
                    <div className={styles.itemDetails}>
                        <p className={styles.cardPrice}>R$ 31,67</p>
                        <p className={styles.cardSales}>203 vendas</p>
                    </div>
                    <h3>Kit 10 Un. Adesivo{" (...)"}</h3>
                </div>

                <div className={styles.card}>
                    <span className={styles.cardImage}></span>
                    <div className={styles.itemDetails}>
                        <p className={styles.cardPrice}>R$ 31,67</p>
                        <p className={styles.cardSales}>203 vendas</p>
                    </div>
                    <h3>Kit 10 Un. Adesivo{" (...)"}</h3>
                </div>
                <div className={styles.card}>
                    <span className={styles.cardImage}></span>
                    <div className={styles.itemDetails}>
                        <p className={styles.cardPrice}>R$ 31,67</p>
                        <p className={styles.cardSales}>203 vendas</p>
                    </div>
                    <h3>Kit 10 Un. Adesivo{" (...)"}</h3>
                </div>

                <div className={styles.card}>
                    <span className={styles.cardImage}></span>
                    <div className={styles.itemDetails}>
                        <p className={styles.cardPrice}>R$ 31,67</p>
                        <p className={styles.cardSales}>203 vendas</p>
                    </div>
                    <h3>Kit 10 Un. Adesivo{" (...)"}</h3>
                </div>

            </div>
            <p>Pagina 1 de 10</p>
        </div>
    )
}