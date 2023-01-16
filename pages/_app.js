import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Layout children={(<Component {...pageProps} />)} />
    </>
  )
}
