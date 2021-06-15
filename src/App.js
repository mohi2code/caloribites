import Input from './components/Input'
import Select from './components/Select'
import Button from './components/Button'

import './styles/App.scss'
import './styles/components.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function App() {

    const [weight, setWeight] = useState(0)
    const [bf, setBf] = useState(0)
    const [activity, setActivity] = useState('low')
    const [goal, setGoal] = useState('lose')

    const [protein, setProtein] = useState(0)
    const [fats, setFats] = useState(0)
    const [carbs, setCarbs] = useState(0)
    const [total, setTotal] = useState(0)

    const [hide, setHide] = useState(true)


    function calculate(e) {
        e.preventDefault()
        
        let leanMass = weight - (weight*bf/100)
        let maintenanceCalories = leanMass * activityLevel()

        let proteinG = leanMass * goalToProtein()
        let proteinC = proteinG * 4
        let fatsG = leanMass * goalToFats()
        let fatsC = fatsG * 9

        let goalCalories = maintenanceCalories + goalToCalories()
        let carbsC = goalCalories - (proteinC + fatsC)
        let carbsG = carbsC / 4
        let totalCalories = proteinC + fatsC + carbsC

        console.log(`Protein: ${proteinG}G`)
        console.log(`Fats: ${fatsG}G`)
        console.log(`Carbs: ${carbsG}G`)
        console.log(`Total calories: ${totalCalories}kcal`)

        setProtein(proteinG)
        setFats(fatsG)
        setCarbs(carbsG)
        setTotal(totalCalories)

        setHide(false)
    }

    function activityLevel() {
        if (activity == "low")
            return 14
        else if (activity == "medium")
            return 15
        else if (activity == "high")
            return 16
        else if (activity == "very high")
            return 17
        else 
            return 14
    }

    function goalToProtein(){
        if (goal == 'lose')
            return 1.1
        else if (goal == 'maintain')
            return 1.25
        else if (goal == 'gain')
            return 1.4
        else 
            return 1.25
    }

    function goalToFats(){
        if (goal == 'lose')
            return 0.3
        else if (goal == 'maintain')
            return 0.4
        else if (goal == 'gain')
            return 0.5
        else 
            return 0.4
    }

    function goalToCalories() {
        if (goal == 'lose')
            return -500
        else if (goal == 'maintain')
            return 0
        else if (goal == 'gain')
            return 500
        else 
            return 0
    }

    const clear = () => {
        setWeight(0)
        setBf(0)
        setActivity('low')
        setGoal('lose')
        setCarbs(0)
        setProtein(0)
        setFats(0)
        setTotal(0)
    }

    return (
        <div id="main-container">
            <nav>
                <header>
                    <img src="/images/favicon.svg" alt="logo"/>
                </header>
            </nav>     

            <motion.main
                animate={hide ? "hide": "show"}
                variants={{
                    hide: {
                        x: 0
                    },

                    show: {
                        x: '-50vw'
                    }
                }}
                transition={{
                    stiffness: 1000
                }}
            >
                <div>
                    <div className="showcase">
                        <img alt="logo" src="/images/logo-dark-transparent.png"/>
                        <p><small>Calculate your daily macros and caloric needs based on your weight, activity level and goal</small></p>
                    </div>
                </div>

                <div>
                    <form>
                        <div className="form-section">
                            <h2>Body Parameters</h2>
                            <div className="text-fields">
                                <Input type="number" placeholder="Weight" tag="KG" value={weight} onChange={e => setWeight(e.target.value)}/>
                                <Input type="number" placeholder="Bodyfat" tag="%" value={bf} onChange={e => setBf(e.target.value)}/>
                            </div>
                        </div>
                        <div className="form-section">
                            <h2>Activity Level</h2>
                            <Select vvalue={activity} onChange={value => setActivity(value)}>
                                {["low", "medium", "high", "very high"]}
                            </Select>
                        </div>
                        <div className="form-section">
                            <h2>Goal</h2>
                            <Select vvalue={goal} onChange={value => setGoal(value)}>
                                {["lose", "maintain", "gain"]}
                            </Select>
                        </div>
                        <div className="buttons-wrapper">
                            <Button type="link" onClick={clear}>Clear</Button>
                            <Button onClick={calculate}>Calculate</Button>
                        </div>
                    </form>
                </div>

                <div>
                    <div className="results">
                        <h3>Your Results</h3>
                        <div className="info">
                            <div className="left">
                                <h1>{total.toFixed(0)} kcal</h1>
                                <p><small>Suggested ammount of calories <strong>per day</strong></small></p>
                            </div>

                            <div className="right">
                                <h3>Macronutrients</h3>
                                <ul>
                                    <li>Carbs <span>{carbs.toFixed(1)}g</span></li>
                                    <li>Protein <span>{protein.toFixed(1)}g</span></li>
                                    <li>Fat <span>{fats.toFixed(1)}g</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.main>       
        </div>
    )
}
