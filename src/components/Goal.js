import { useEffect } from "react"
import SelectCards from "./SelectCards"
import { AnimatedForm } from "./Animated"

const values = [
    { title: 'Lose Weight' },
    { title: 'Maintain Weight' },
    { title: 'Gain Weight' },
]

export default function Goal({ setPage, goal, setGoal }) {

    useEffect(() => setPage(2), [setPage])

    return (
        <AnimatedForm>
            <div className="form-header">
                <h1>Goal</h1>
                <p>what are you trying to accomplish</p>
            </div>

            <div className="input-group">
                <SelectCards
                    values={values}
                    value={goal}
                    onChange={selected => setGoal(selected)}
                />
            </div>
        </AnimatedForm>
    )
}