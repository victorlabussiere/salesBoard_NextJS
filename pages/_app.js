import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <meta charSet='utf-8' />
        <meta name='author' content='Victor Labussiere' />
        <meta name='description' content='Web Application developed with Next js by Victor Labussiere' />
        <meta name='keywords' content='React Javascript Frontend Junior UXDesigner NextJS NodeJS MirageJS' />
        <title>Salesboard | XCO+</title>
        <link rel='icon' href='./images/icon.png' sizes='32x32' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
