import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './TransformationGallery.css';

/* ────────────────────────────────────────────────────
   IMAGE DATA — Automatically loads from ./photos folder
   Any image you drop into the 'photos' folder will 
   automatically appear in the gallery.
   ──────────────────────────────────────────────────── */
const imageModules = import.meta.glob('./photos/*.{png,jpg,jpeg,webp,svg}', { eager: true });
const transformationImages = Object.entries(imageModules).map(([path, module], index) => {
    // Extract a cleaner label from the filename if possible
    const fileName = path.split('/').pop().split('.')[0];
    const label = fileName.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return {
        src: module.default || module,
        label: label || `Transformation ${index + 1}`
    };
});


/* ── Animation variants ── */
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3, ease: 'easeIn' } },
};

const imageVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function TransformationGallery() {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedImg, setExpandedImg] = useState(null);

    return (
        <>
            {/* ── HINDI HEADER ── */}
            <motion.div
                className="tg-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="tg-primary-hindi">हर तस्वीर एक सच्ची कहानी है।</h2>

                <div className="tg-supporting-wrapper">
                    <motion.p
                        className="tg-supporting-line"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        परिणाम जो खुद बोलते हैं।
                    </motion.p>
                    <motion.p
                        className="tg-supporting-line"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    >
                        बदलाव जो दिखता भी है, महसूस भी होता है।
                    </motion.p>
                </div>
            </motion.div>

            {/* ── CTA BUTTON ── */}
            <div className="tg-cta-wrapper">
                <motion.button
                    className="tg-cta-btn"
                    onClick={() => setIsOpen(true)}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Check the Transformations
                </motion.button>
            </div>

            {/* ── MODAL ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="tg-backdrop"
                        variants={backdropVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            className="tg-modal"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                className="tg-close-btn"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close gallery"
                            >
                                ✕
                            </button>

                            <h2 className="tg-modal-title">Transformations</h2>

                            {/* Image grid */}
                            {transformationImages.length > 0 ? (
                                <motion.div
                                    className="tg-grid"
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ staggerChildren: 0.12 }}
                                >
                                    {transformationImages.map((img, i) => (
                                        <motion.div
                                            key={i}
                                            className="tg-card"
                                            variants={imageVariant}
                                            onClick={() => setExpandedImg(img.src)}
                                        >
                                            <img
                                                src={img.src}
                                                alt={img.label || `Transformation ${i + 1}`}
                                                className="tg-card-img"
                                            />
                                            {img.label && (
                                                <div className="tg-card-overlay">
                                                    <span className="tg-card-label">{img.label}</span>
                                                </div>
                                            )}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            ) : (
                                <p className="tg-empty">
                                    Images coming soon — drop your transformation photos into the
                                    <code>src/components/TransformationGallery/photos</code> folder to see them here!
                                </p>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── FULLSCREEN PREVIEW ── */}
            <AnimatePresence>
                {expandedImg && (
                    <motion.div
                        className="tg-fullscreen"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.3 } }}
                        exit={{ opacity: 0, transition: { duration: 0.25 } }}
                        onClick={() => setExpandedImg(null)}
                    >
                        <motion.img
                            src={expandedImg}
                            alt="Expanded view"
                            className="tg-fullscreen-img"
                            initial={{ scale: 0.92, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } }}
                            exit={{ scale: 0.92, opacity: 0, transition: { duration: 0.25 } }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default TransformationGallery;
