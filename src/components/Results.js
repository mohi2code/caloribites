import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import VideoThumbnail from './VideoThumbnail'
import { data, tag } from '../VideosData'

export default function Results({ page, setPage }) {

    const { state: {
        protein, 
        carbs,
        fats, 
        total,
        goal
    } } = useLocation()

    useEffect(() => setPage(3), [setPage])

    return (
        <motion.div 

            initial={{ x:100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            exit={{ y:80, opacity: 0 }} 
            transition={{ stiffness: 1000, duration: 0.2 }}
            className="results-container container"
        >
            <h3>Your Results</h3>
            <div className="results-header">
                <h1>{total} kcal</h1>
                <p>suggested ammount of calories <strong>per day</strong></p>
            </div>
            <div className="results-table">
                <h4>MACRONUTRIENTS</h4>
                <ul>
                    <li>
                        <p className="macro">Carbohydrate</p>
                        <p className="value">{carbs}<strong>g</strong></p>
                    </li>
                    <li>
                        <p className="macro">Protein</p>
                        <p className="value">{protein}<strong>g</strong></p>
                    </li>
                    <li>
                        <p className="macro">Fat</p>
                        <p className="value">{fats}<strong>g</strong></p>
                    </li>
                </ul>
            </div>
            <div className="suggestions-container">
                <div className="header">
                    <h4>Suggested</h4>
                    <h4 className="view-all">view all &gt;</h4>
                </div>
                <div className="videos">
                    { data.map(video => (
                        (
                            goal === 0 && video.tag === tag.loseWeight && (
                                <VideoThumbnail 
                                    title={video.title}
                                    thumbnail={video.thumbnail}
                                    views={video.views}
                                    link={video.link}
                                />
                            )
                        ) ||
                        (
                            goal === 2 && video.tag === tag.gainMuscle && (
                                <VideoThumbnail 
                                    title={video.title}
                                    thumbnail={video.thumbnail}
                                    views={video.views}
                                    link={video.link}
                                />
                            )
                        ) ||
                        (
                            goal === 1 && video.tag === tag.general && (
                                <VideoThumbnail 
                                    title={video.title}
                                    thumbnail={video.thumbnail}
                                    views={video.views}
                                    link={video.link}
                                />
                            )
                        )
                    )) }
                </div>
            </div>
        </motion.div>
    )
}