import './HeroBanner.css';

function HeroBanner() {
    return (
        <div className="hero-outer-glow">
            <header className="hero-banner">
                {/* Light sweep — diagonal glass reflection */}
                <div className="hero-light-sweep" />

                {/* Ambient light orb — slow drifting gradient */}
                <div className="hero-ambient-light" />

                <div className="hero-content">
                    <h1 className="hero-heading">Extreme Fitness Achiever's Studio</h1>

                    <div className="hero-subtitle">
                        <span style={{ animationDelay: '0.6s' }}>TRANSFORM YOUR BODY TODAY!</span>
                        <div className="hero-hindi-block">
                            <p className="hero-hindi-line">शरीर नहीं, आत्मविश्वास बनाइए।</p>
                            <p className="hero-hindi-line">सिर्फ फिटनेस नहीं, एक नया विश्वास।</p>
                            <p className="hero-hindi-line">ताकत सिर्फ मांसपेशियों में नहीं, मन में भी होती है।</p>
                        </div>

                        <p className="hero-tagline">
                            एक कदम ताकत, स्वास्थ्य, और आत्मविश्वास की ओर ।
                        </p>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HeroBanner;
