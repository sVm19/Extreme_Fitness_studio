import { useEffect, useRef } from 'react';
import HeroBanner from './components/HeroBanner/HeroBanner';
import CtaBanner from './components/CtaBanner/CtaBanner';
import VideoSection from './components/VideoSection/VideoSection';
import AboutSection from './components/AboutSection/AboutSection';
import ProgramsSection from './components/ProgramsSection/ProgramsSection';
import TransformationGallery from './components/TransformationGallery/TransformationGallery';
import './App.css';

function App() {
    const glowRef = useRef(null);

    // Cursor glow follower — desktop only
    useEffect(() => {
        const glow = glowRef.current;
        if (!glow) return;

        // Only enable on non-touch devices
        const mq = window.matchMedia('(pointer: fine)');
        if (!mq.matches) {
            glow.style.display = 'none';
            return;
        }

        let rafId;
        const onMove = (e) => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                glow.style.left = e.clientX + 'px';
                glow.style.top = e.clientY + 'px';
            });
        };

        const onEnter = () => { glow.style.opacity = '1'; };
        const onLeave = () => { glow.style.opacity = '0'; };

        document.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseenter', onEnter);
        document.addEventListener('mouseleave', onLeave);

        return () => {
            cancelAnimationFrame(rafId);
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseenter', onEnter);
            document.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    return (
        <div className="app">
            {/* Cursor glow */}
            <div ref={glowRef} className="cursor-glow" style={{ opacity: 0 }} />

            <HeroBanner />
            <CtaBanner />
            <TransformationGallery />
            <VideoSection />
            <AboutSection />
            <ProgramsSection />
        </div>
    );
}

export default App;
