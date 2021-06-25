import { useEffect } from "react"
import InputWithTag from './InputWithTag'

import { AnimatedForm } from "./Animated" 

export default function BodyParameters({ setPage }) {

    useEffect(() => setPage(0), [setPage])

    return (
        <AnimatedForm>
            <div className="form-header">
                <h1>Body Parameters</h1>
                <p>enter your weight and bodyfat percentage</p>
            </div>

            <div className="input-group">
                <InputWithTag type="number" placeholder="Weight" tag="KG"/>
                <InputWithTag type="number" placeholder="Bodyfat" tag="%"/>
            </div>
        </AnimatedForm>
    )
}