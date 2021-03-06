import { useEffect } from "react"
import SelectCards from "./SelectCards"
import { AnimatedForm } from "./Animated"

const values = [
    {
        title: "Low",
        description: "Sitting all day, barely moving"
    },
    {
        title: "Medium",
        description: "Moderate activity through the day, light exercise"
    },
    {
        title: "High",
        description: "Active, exercises 4-5 times a week"
    },
    {
        title: "Very High",
        description: "Highly Active, spends most of the day on your feet, exercise 5-6 times a week"
    },
]

export default function ActivityLevel({ setPage, activityLevel, setActivityLevel }) {

    useEffect(() => setPage(1), [setPage])

    return (
        <AnimatedForm>
            <div className="form-header">
                <h1>Activity Level</h1>
                <p>how active are you</p>
            </div>

            <div className="input-group">
                <SelectCards
                    values={values}
                    value={activityLevel}
                    onChange={selected => setActivityLevel(selected)}
                />
            </div>
        </AnimatedForm>
    )
}