import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SocialLinks from '../SocialLinks/SocialLinks';
import './VideoSection.css';

/* ── Animation variants ── */
const videoLeftVariant = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const videoRightVariant = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } },
};

const socialVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 } },
};

const VIDEOS = [
    {
        id: 'ie-KYV3OihI',
        title: 'Meet Sugandh: Your Health Coach',
        url: 'https://www.youtube.com/embed/ie-KYV3OihI'
    },
    {
        id: 'FPCpX3Iyy6A',
        title: "3 Fat Loss Mistakes You're Making",
        url: 'https://www.youtube.com/embed/FPCpX3Iyy6A'
    }
];

function VideoSection() {
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, amount: 0.15 });

    return (
        <section ref={sectionRef} className="content-section">
            {/* LEFT — Dual Videos */}
            <div className="video-column">
                <div className="video-pair">
                    {VIDEOS.map((video, index) => (
                        <motion.div
                            key={video.id}
                            className="video-container"
                            variants={index === 0 ? videoLeftVariant : videoRightVariant}
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                        >
                            <iframe
                                src={`${video.url}?modestbranding=1&rel=0&showinfo=0`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <div className="video-title-overlay">
                                <h3>{video.title}</h3>
                            </div>
                            <div className="video-glass-overlay" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* RIGHT — Social Links (unchanged) */}
            <motion.div
                className="social-column-wrapper"
                variants={socialVariant}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <SocialLinks />
            </motion.div>
        </section>
    );
}

export default VideoSection;
