import { motion } from "framer-motion"

export default function VideoThumbnail({ title, thumbnail, views, link }) {
    return (
        <motion.div
            animate="notHover"
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="video"
            href={link}
        >
            <motion.img
                alt="thumbnail-overlay"
                src="/images/thumbnail-overlay.png"
                className="thumbnail-overlay"
                variants={{
                    notHover: { opacity: 0 },
                    hover: { opacity: 0.95 }
                }}
            />
            <img
                alt={title}
                src={thumbnail}
            />
            <div className="header">
                <h4>{title}</h4>
                <h5>{views} views</h5>
            </div>
            <a className="link" rel="noreferrer" href={link} target="_blank" >{}</a>
        </motion.div>
    )
}