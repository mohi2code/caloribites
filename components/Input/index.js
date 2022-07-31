import { forwardRef } from 'react'
import classNames from 'classnames'
import styles from './Input.module.css'

const Input = forwardRef(({ size="md", children, className, type="text", ...props }, ref) => (
    <input 
        type={type}
        ref={ref}
        className={classNames(styles['input'], className)} 
        {...props} 
    />
))
Input.displayName="Input"

const Tag = ({ children, className, ...props }) => (
    <span 
        className={classNames(styles['tag'], className)}
        {...props}
    >
        {children}
    </span>
)
Tag.displayName="Tag"

const InputTag = forwardRef(({ children, className, ...props }, ref) => (
    <div 
        ref={ref}
        className={classNames(styles['input-tag'], className)} 
        {...props} 
    >
        {children}
    </div>
))
InputTag.displayName="Input"

export { Input, InputTag, Tag }