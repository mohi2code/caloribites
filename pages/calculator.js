import Head from 'next/head'
import styles from '../styles/Calculator.module.css'
import Button from '../components/Button'
import { Card, Header, Info } from '../components/Card'
import { Input, InputTag, Tag } from '../components/Input'

export default function Calculator() {
    return (
        <div className={styles['page']}>
            <Head>
                <title>Caloribites</title>
                <meta name="description" content="NextJs restaurant template" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>Components</h1>

            <div>
                <Button>Primary</Button>
                <Button type="white">White</Button>
                <Button type="gray">Gray</Button>
            </div>

            <div style={{width: '600px'}}>
                <Input type="number"/>
                <Input type="text"/>
                <InputTag>
                    <Input type="number"/>
                    <Tag>KG</Tag>
                </InputTag>
            </div>

            <div style={{width: '600px', paddingLeft: '2rem'}}>
                <Card>
                    <Header>Low</Header>
                    <Info>Sitting all day, barely moving</Info>
                </Card>
                <Card selected={true}>
                    <Header>Medium</Header>
                    <Info>Sitting all day, barely moving</Info>
                </Card>
                <Card>
                    <Header>Hight</Header>
                    <Info>Sitting all day, barely moving</Info>
                </Card>
            </div>

        </div>
    )
}