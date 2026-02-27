import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './AboutSection.css';

/* ── Animation variants ── */
const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5, when: 'beforeChildren', staggerChildren: 0.2 },
    },
};

const imageVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const textChild = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
        scaleX: 1,
        transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' },
    },
};

function AboutSection() {
    const sectionRef = useRef(null);

    /* Parallax — track scroll progress through this section */
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    /* Background moves slower: translateY 0 → -80px, scale 1 → 1.05 */
    const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

    return (
        <section className="about-section" ref={sectionRef}>
            {/* ── LAYER 1: Parallax background blobs ── */}
            <motion.div
                className="about-parallax-bg"
                style={{ y: bgY, scale: bgScale }}
            >
                <div className="parallax-blob parallax-blob-1" />
                <div className="parallax-blob parallax-blob-2" />
                <div className="parallax-blob parallax-blob-3" />
            </motion.div>

            {/* ── LAYER 2: Content ── */}
            <motion.div
                className="about-container"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* LEFT: Portrait image */}
                <motion.div className="about-image-panel" variants={imageVariants}>
                    <div className="about-image-wrapper">
                        <img
                            src="/assets/Picture_portrait.JPG"
                            alt="Profile portrait"
                            className="about-portrait"
                        />

                        <div className="about-glass-overlay" />
                    </div>
                </motion.div>

                {/* RIGHT: Text content */}
                <motion.div
                    className="about-text-block"
                    variants={sectionVariants}
                >
                    <motion.span className="about-label" variants={textChild}>
                        ABOUT ME
                    </motion.span>

                    <motion.h2 className="about-heading" variants={textChild}>
                        Helping You Build Strength &amp; Confidence
                    </motion.h2>

                    <motion.div
                        className="about-accent-line"
                        variants={lineVariants}
                        style={{ originX: 0 }}
                    />

                    <motion.p className="about-paragraph" variants={textChild}>
                        With years of dedicated coaching experience, I believe fitness is
                        more than just lifting weights — it&apos;s about building a mindset
                        of discipline, resilience, and self-belief. Every session is designed
                        to push your limits while keeping the journey enjoyable and
                        sustainable.
                    </motion.p>

                    <motion.a
                        href="https://forms.gle/tdkhcTDf88X3wb636"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="about-cta"
                        variants={textChild}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn More
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* ── LAYER 3: Soft overlay glow ── */}
            <div className="about-overlay-glow" />
        </section>
    );
}

export default AboutSection;
