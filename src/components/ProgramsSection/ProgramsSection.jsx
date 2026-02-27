import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './ProgramsSection.css';

/* ── Data ── */
const PROGRAMS = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8a6 6 0 0 1-6 6M6 8a6 6 0 0 0 6 6m0 0v4m-3 2h6M12 2v2" />
            </svg>
        ),
        title: 'Strength Foundation',
        description:
            'Build raw power and functional strength with structured progressive overload training designed for all fitness levels.',
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        title: 'Body Transformation',
        description:
            'A 12-week intensive program combining nutrition guidance, cardio conditioning, and targeted muscle sculpting for visible results.',
        featured: true,
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        title: 'Lifestyle Coaching',
        description:
            'Holistic wellness mentoring that integrates mindset, daily habits, and sustainable fitness routines into your life.',
    },
];

/* ── Variants ── */
const headerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.4, when: 'beforeChildren', staggerChildren: 0.15 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const lineVariant = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' } },
};

const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.25 },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function ProgramsSection() {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const bgY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.04]);

    return (
        <section className="programs-section" ref={sectionRef}>
            {/* Parallax background blobs */}
            <motion.div
                className="programs-parallax-bg"
                style={{ y: bgY, scale: bgScale }}
            >
                <div className="programs-blob programs-blob-1" />
                <div className="programs-blob programs-blob-2" />
            </motion.div>

            {/* Header */}
            <motion.div
                className="programs-header"
                variants={headerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <motion.span className="programs-label" variants={fadeUp}>
                    PROGRAMS
                </motion.span>
                <motion.h2 className="programs-heading" variants={fadeUp}>
                    Structured Paths to Transformation
                </motion.h2>
                <motion.div
                    className="programs-underline"
                    variants={lineVariant}
                    style={{ originX: 0 }}
                />
            </motion.div>

            {/* Hindi Descriptive Block */}
            <motion.div
                className="programs-hindi-description"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <p>हर लक्ष्य के लिए सही मार्गदर्शन।</p>
                <p>वजन घटाना हो या बढ़ाना — समाधान यहाँ है।</p>
                <p>हर शरीर अलग है, इसलिए हर योजना भी अलग।</p>
            </motion.div>

            {/* Card grid */}
            <motion.div
                className="programs-grid"
                variants={gridVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                {PROGRAMS.map((p) => (
                    <motion.div
                        key={p.title}
                        className={`program-card ${p.featured ? 'program-card-featured' : ''}`}
                        variants={cardVariant}
                    >
                        {/* Hover gradient overlay */}
                        <div className="program-card-hover-overlay" />

                        <div className="program-card-icon">{p.icon}</div>
                        <h3 className="program-card-title">{p.title}</h3>
                        <p className="program-card-desc">{p.description}</p>
                        <a href="https://forms.gle/tdkhcTDf88X3wb636" target="_blank" rel="noopener noreferrer" className="program-card-cta">
                            Learn More →
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default ProgramsSection;
