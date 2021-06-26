import { useEffect } from "react"
import InputWithTag from './InputWithTag'

import { AnimatedForm } from "./Animated" 

export default function BodyParameters({ setPage, weight, setWeight, bodyfat, setBodyFat }) {

    useEffect(() => setPage(0), [setPage])

    return (
        <AnimatedForm>
            <div className="form-header">
                <h1>Body Parameters</h1>
                <p>enter your weight and bodyfat percentage</p>
            </div>

            <div className="input-group">
                <InputWithTag 
                    type="number" placeholder="Weight" tag="KG"
                    value={weight} onChange={e => setWeight(e.target.value)}
                />
                <InputWithTag 
                    type="number" placeholder="Bodyfat" tag="%"
                    value={bodyfat} onChange={e => setBodyFat(e.target.value)}
                />
            </div>
        </AnimatedForm>
    )
}