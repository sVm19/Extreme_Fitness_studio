import './WaveDivider.css';

function WaveDivider() {
    return (
        <div className="wave-divider">
            {/* Thin glowing accent line */}
            <div className="wave-divider-line" />

            {/* SVG curved wave */}
            <svg
                className="wave-divider-svg"
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(229, 57, 53,0.15)" />
                        <stop offset="50%" stopColor="rgba(255, 82, 82,0.10)" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
                <path
                    d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
                    fill="url(#waveGrad)"
                />
            </svg>
        </div>
    );
}

export default WaveDivider;

