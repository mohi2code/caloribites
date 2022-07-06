import Head from 'next/head'
import styles from '../styles/Calculator.module.css'
import Button from '../components/Button'

export default function Calculator() {
    return (
        <div className={styles['page']}>
            <Head>
                <title>Caloribites</title>
                <meta name="description" content="NextJs restaurant template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <h1>Components</h1>

                <Button>Primary</Button>
                <Button type="white">White</Button>
                <Button type="gray">Gray</Button>
            </div>
        </div>
    )
}