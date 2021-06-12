import { motion } from 'framer-motion'

export default function Button({ children }) {
    return (
        <motion.input 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            className="btn"
            type="button"
            value={children}
        />
    )
}