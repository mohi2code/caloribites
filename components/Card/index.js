import { forwardRef } from "react"
import { motion } from "framer-motion"
import classNames from 'classnames'
import styles from './Card.module.css'

const Card = forwardRef(({ selected=false, children, className, ...props }, ref) => (
    <motion.div
        ref={ref}
        whileHover={{ scale: 1.01, backgroundColor: '#5f27cd', color: '#fff' }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.175 }}
        className={classNames(styles['card'], { [styles['selected']]: selected })}
        {...props}
    >
        <div className={styles['card__toggle']}></div>
        <div className={styles['card__content']}>{children}</div>
    </motion.div>
))
Card.displayName="Card"

const Header = ({ children, className, ...props }) => (
    <h3 className={classNames(styles['content-header'], className)} {...props}>
        {children}
    </h3>
)

const Info = ({ children, className, ...props }) => (
    <p className={classNames(styles['content-info'], className)} {...props}>
        {children}
    </p>
)

export { Card, Header, Info }
