import { useState } from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function Navbar() {

    const history = useHistory()
    const [toggle, setToggle] = useState(false)

    return (
        <div className="navbar responsive-container">
            <ul className="nav">
                <NavItem history={history} link="/home">Home</NavItem>
                <NavItem history={history} link="/loading">Calculator</NavItem>
            </ul>
            <Toggle toggle={toggle} setToggle={setToggle} />
            <NavMobile history={history} toggle={toggle} />
        </div>
    )
}

const NavMobile = ({ history, toggle }) => (
    <motion.ul
        initial="collapsed"
        animate={ toggle ? "open": "collapsed" }
        variants={{
            open: {opacity: 1, display: 'flex'},
            collapsed: {
                opacity: 0, 
                display: "none", 
                transition: {delayChildren: 0, staggerChildren: 0.1, staggerDirection: -1, delay: .3}
            }
        }}
        transition={{
            stiffness: 500,
            duration: .5,
            delayChildren: 0.4,
            staggerChildren: .1,
        }}
        className="nav-mobile"
    >
        <NavItem history={history} link="/home">Home</NavItem>
        <NavItem history={history} link="/loading">Calculator</NavItem>
    </motion.ul>
)

const NavItem = ({ children, history, link }) => (
    <motion.li
        variants={{
            open: {y: 0, opacity: 1},
            collapsed: {y: 60, opacity: 0},
        }}
        transition={{
            ease: 'easeOut'
        }}
        className="nav-item"
        onClick={() => history.push(link)}
    >
        <motion.p
            whileHover={{ borderBottom: "3px solid #F8C291" }} 
        >{children}</motion.p>
    </motion.li>
)

const Toggle = ({ toggle, setToggle }) => (
        <motion.div
          initial="collapsed"
          animate={ toggle ? "open": "collapsed" }
          className="hamburger-btn" onClick={() => setToggle(!toggle)}>
          <motion.div
            variants={{
              open: {rotate: 45, y: 14, backgroundColor: 'white'},
              collapsed: {rotate: 0}
            }}
            className="hamburger-stripe"></motion.div>
          <motion.div
            variants={{
              open: {opacity: 0, x: -10, backgroundColor: 'white'},
              collapsed: {opacity: 1, x: 0}
            }}
            transition={{ duration: .1 }}
            className="hamburger-stripe"></motion.div>
          <motion.div
            variants={{
              open: {rotate: -45, y: -14, backgroundColor: 'white'},
              collapsed: {rotate: 0}
            }}
            className="hamburger-stripe"></motion.div>
        </motion.div>
)
