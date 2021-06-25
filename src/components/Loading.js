import { useEffect } from "react"
import { useHistory } from "react-router"
import { motion } from "framer-motion"

const style = {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#192a56',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

export default function Loading() {

    const history = useHistory()

    useEffect(() => {
        setTimeout(() => history.push('/input/body-parameters'), 2500)
    }, [])

    return (
        <motion.div id="loading" style={style} exit={{ opacity: 0 }}>
            <motion.img 
                animate={{ y: [7, -7, 7, -7, 7] }}
                transition={{ duration: 2, repeat: Infinity }}
                alt="caloribites" 
                src="/images/logo-dark-transparent.png" 
                width="300px" 
                height="300px"
            /> 
        </motion.div>
    )
}