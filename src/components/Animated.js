import { motion } from "framer-motion"

const variants = {
    initial: {
        x: 100, opacity: 0
    },
    animate: {
        x: 0, opacity: 1 
    },
    exit : {
        y: 80, opacity: 0
    }
}

const AnimatedForm = ({ children, ...props }) => (
    <motion.form
        variants={variants}
        initial="initial"
        animate="animate"
        transition={{ stiffness: 1000, duration: 0.2 }}
        exit="exit"
        {...props}
    >
        { children }
    </motion.form>
)

export {
    AnimatedForm
}