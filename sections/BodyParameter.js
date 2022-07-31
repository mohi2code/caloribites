import styles from './BodyParameters.module.css'
import { Input, InputTag, Tag } from '../components/Input'

export default function BodyParameters() {
    return (
        <section className={styles['section']}>
            <h1>Body Parameters</h1>
            <p>Enter your weight and bodyfat percentage</p>

            <div className={styles['inputs-group']}>
                <InputTag>
                    <Input />
                    <Tag>KG</Tag>
                </InputTag>

                <InputTag>
                    <Input />
                    <Tag>%</Tag>
                </InputTag>
            </div>

        </section>
    )
}