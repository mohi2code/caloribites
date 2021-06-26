import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

export default function Results({ page, setPage }) {

    const { state: {
        protein, 
        carbs,
        fats, 
        total
    } } = useLocation()

    useEffect(() => setPage(3), [setPage])

    return (
        <motion.div 

            initial={{ x:100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            exit={{ y:80, opacity: 0 }} 
            transition={{ stiffness: 1000, duration: 0.2 }}
            className="results-container container"
        >
            <h3>Your Results</h3>
            <div className="results-header">
                <h1>{total} kcal</h1>
                <p>suggested ammount of calories <strong>per day</strong></p>
            </div>
            <div className="results-table">
                <h4>MACRONUTRIENTS</h4>
                <ul>
                    <li>
                        <p className="macro">Carbohydrate</p>
                        <p className="value">{carbs}<strong>g</strong></p>
                    </li>
                    <li>
                        <p className="macro">Protein</p>
                        <p className="value">{protein}<strong>g</strong></p>
                    </li>
                    <li>
                        <p className="macro">Fat</p>
                        <p className="value">{fats}<strong>g</strong></p>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}