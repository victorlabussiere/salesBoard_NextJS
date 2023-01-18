import { useEffect, useState } from 'react'
import styles from './CriarProduto.module.css'


export default function CriarProduto({ status }) {
    let [name, setName] = useState()
    let [code, setCode] = useState()
    let [sales, setSales] = useState()
    let [stock, setStock] = useState()
    let [price, setPrice] = useState()

    let [produtos, setProdutos] = useState([])
    let [response, setResponse] = useState()
    useEffect(() => {
        fetch('api/produtos')
            .then(res => res.json())
            .then(data => data.produtos)
            .then(data => setProdutos(data))
            .catch(err => console.error('erro', err.message))
    }, [response])

    const data = {
        id: produtos.length + 1,
        name,
        code: 'MLB' + code + produtos.length + 1,
        sales,
        stock,
        price,
        favorite: false,
        picture: '/images/iphone14.jpg'
    }

    function postItem(body) {
        return fetch('api/produtos', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json'
            }
        })
            .then((res) => {
                let inputs = document.getElementsByTagName('input')
                let values = Object.values(inputs)
                values.forEach(e => e.value = '')
                alert('Item criado com sucesso')
                return
            })
            .then(data => setResponse(p => p += data))
            .catch(err => console.error('erro', err))
    }

    return (
        <div id='containerModal' className={styles.criarContainer}>
            <div className={styles.contentArea}>
                <header>
                    <h1> Adicionando novo Produto</h1>
                    <i className='material-icons closeModal' onClick={(e) => {
                        let modal = document.getElementById('modal')
                        modal.classList = 'modal'
                    }}>close</i>
                </header>
                <form className={styles.formContainer}>
                    <label htmlFor="nomeProduto"> <h4>Nome do produto</h4>
                        <input required name='nomeProduto' type="text" placeholder='Digite o nome do produto' onChange={(e) => {
                            let value = e.target.value
                            setName(prev => prev = value)
                        }} />
                    </label>

                    <fieldset>
                        <label htmlFor="codeProduto"> <h4>Código</h4>
                            <input required name='codeProduto' type="number" placeholder='MLB...' onChange={(e) => {
                                let value = e.target.value
                                setCode(prev => prev = value)
                            }} />
                        </label>
                        <label htmlFor="stockProduto"> <h4>Total no estoque</h4>
                            <input required name='stockProduto' type="number" placeholder='Digite a quantidade de itens disponíveis' onChange={(e) => {
                                let value = e.target.value
                                setStock(prev => prev = value)
                            }} />
                        </label>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="salesProduto"> <h4>Número de vendas</h4>
                            <input required name='salesProduto' type="number" placeholder='Digite o total de vendas' onChange={(e) => {
                                let value = e.target.value
                                setSales(prev => prev = value)
                            }} />
                        </label>

                        <label htmlFor="priceProduto"> <h4>Preço</h4>
                            <input required name='priceProduto' type="number" placeholder='Digite o total de vendas' onChange={(e) => {
                                let value = e.target.value
                                setPrice(prev => prev = value)
                            }} />
                        </label>
                    </fieldset>

                </form>
                <button name="button" id="sbmt" onClick={(e) => {
                    var modal = document.getElementById('modal')
                    postItem(data)
                    status = !status
                    return modal.classList = 'modal'
                }}> Enviar</button>
            </div>
        </div >

    )
}