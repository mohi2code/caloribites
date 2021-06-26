import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Results({ page, setPage }) {

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
                <h1>1890 kcal</h1>
                <p>suggested ammount of calories <strong>per day</strong></p>
            </div>
            <div className="results-table">
                <h4>MACRONUTRIENTS</h4>
                <ul>
                    <li>
                        <p className="macro">Carbohydrate</p>
                        <p className="value">216<strong>g</strong></p>
                    </li>
                    <li>
                        <p className="macro">Protein</p>
                        <p className="value">138<strong>g</strong></p>
                    </li>
                    <li>
                        <p className="macro">Fat</p>
                        <p className="value">53<strong>g</strong></p>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}