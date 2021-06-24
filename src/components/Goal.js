import { useEffect } from "react"
import SelectCards from "./SelectCards"

const values = [
    { title: 'Lose Weight' },
    { title: 'Maintain Weight' },
    { title: 'Gain Weight' },
]

export default function Goal({ setPage }) {

    useEffect(() => setPage(2), [setPage])

    return (
        <form>
            <div className="form-header">
                <h1>Goal</h1>
                <p>what are you trying to accomplish</p>
            </div>

            <div className="input-group">
                <SelectCards
                    values={values}
                    onChange={selected => selected}
                />
            </div>
        </form>
    )
}