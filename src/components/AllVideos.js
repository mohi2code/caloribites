import { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router'
import { motion } from 'framer-motion'
import VideoThumbnail from './VideoThumbnail'

import { data, tag } from '../VideosData'

export default function AllVideos({ page, setPage }) {

    const { state } = useLocation() 
    const history = useHistory()
    useEffect(() => setPage(4), [setPage])

    return (
        <motion.div
            initial={{ x:100, opacity: 0 }} 
            animate={{ x: 0, opacity: 1 }}
            exit={{ y:80, opacity: 0 }} 
            transition={{ stiffness: 1000, duration: 0.2 }}
            className="container all-videos"
        >
            <h3 onClick={e => history.push("/results", state)}>&#60; Back</h3>
            <div>
                <h2>General</h2>
                <div className="videos">
                    { data.map(video => (
                        video.tag === tag.general && (
                            <VideoThumbnail 
                                title={video.title}
                                thumbnail={video.thumbnail}
                                views={video.views}
                                link={video.link}
                            />
                        )           
                    )) }
                </div>
            </div>
            <div>
                <h2>Weigh Loss</h2>
                <div className="videos">
                    { data.map(video => (
                        video.tag === tag.loseWeight && (
                            <VideoThumbnail 
                                title={video.title}
                                thumbnail={video.thumbnail}
                                views={video.views}
                                link={video.link}
                            />
                        )           
                    )) }
                </div>
            </div>
            <div>
                <h2>Gain Muscle</h2>
                <div className="videos">
                    { data.map(video => (
                        video.tag === tag.gainMuscle && (
                            <VideoThumbnail 
                                title={video.title}
                                thumbnail={video.thumbnail}
                                views={video.views}
                                link={video.link}
                            />
                        )           
                    )) }
                </div>
            </div>
        </motion.div>
    )
}