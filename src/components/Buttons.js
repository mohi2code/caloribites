import { motion } from "framer-motion"

const PrimaryButton = ({ value,  onClick}) => (
    <motion.input 
        whileTap={{ scale: 0.95 }}
        className="btn" 
        type="button" 
        value={value}
        onClick={onClick}
    />
)

const GrayButton = ({ value,  onClick}) => (
    <motion.input 
        whileTap={{ scale: 0.95 }}
        className="btn btn-gray" 
        type="button" 
        value={value}
        onClick={onClick}
    />
)

const WhiteButton = ({ value,  onClick}) => (
    <motion.input 
        whileTap={{ scale: 0.95 }}
        className="btn btn-white" 
        type="button" 
        value={value}
        onClick={onClick}
    />
)

export {
    PrimaryButton,
    GrayButton,
    WhiteButton
}
