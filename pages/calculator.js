import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Calculator.module.css'
import Button from '../components/Button'
import { Card, Header, Info } from '../components/Card'
import BodyParameters from '../sections/BodyParameter'

export default function Calculator() {
    return (
        <div className={styles['page']}>
            <Head>
                <title>Caloribites</title>
                <meta name="description" content="NextJs restaurant template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav>
                <Image
                    src="/favicon.svg"
                    alt="Logo"
                    width={44}
                    height={44}
                    />
            </nav>

            <main>
                <BodyParameters />
            </main>

            <footer>
                <div className={styles['buttons-container']}>
                    {/* <Button type="gray">Back</Button> */}
                    <Button>Continue</Button>
                </div>
            </footer>

        </div>
    )
}