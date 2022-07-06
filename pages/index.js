import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles['page']}>
            <Head>
                <title>Welcome to Caloribites</title>
                <meta name="description" content="NextJs restaurant template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>The new version of Caloribites boiiiis</h1>
        </div>
    )
}