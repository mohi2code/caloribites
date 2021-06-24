import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function SelectCards({ value, onChange, values=[] }) {

    const [selected, setSelected] = useState(value ? value: -1)

    useEffect(() => onChange(selected), [selected])

    return (
        <div className="select-cards">
            { values.map((card, i) => (
                <motion.div 
                whileHover={{ scale: 1.01, backgroundColor: '#5f27cd', color: '#fff' }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.175 }}
                className={`card ${selected === i ? "card-selected": ""}`}
                key={i}
                onClick={e => setSelected(i)}
                >
                    <div className="card-toggle"></div>
                    <div className="card-content">
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                </motion.div>
            )) }
        </div>
    )
}