import { motion } from 'framer-motion'

export default function Button({ children, type, onClick }) {
    return (
        <motion.input 
            onClick={onClick ? onClick : ""}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: .95 }}
            className={`btn ${ type == "link" ? "btn-link": "" }`}
            type="button"
            value={children}
        />
    )
}