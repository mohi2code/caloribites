import { forwardRef } from "react";
import { motion } from "framer-motion";
import styles from './Button.module.css'
import classNames from "classnames";

const Button = forwardRef(({ type="primary", size="md", children, className, ...props }, ref) => (
    <motion.button
        ref={ref}
        className={classNames(styles.btn, {
            [styles[`${type}`]]: type,
            [styles[`${size}`]]: size
        })}
        whileTap={{ scale: 0.95 }}
        {...props}
    >
        {children}
    </motion.button>
))
Button.displayName="Button"

export default Button