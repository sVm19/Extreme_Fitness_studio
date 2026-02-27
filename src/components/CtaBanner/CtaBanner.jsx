import './CtaBanner.css';

function CtaBanner() {
    return (
        <div className="cta-banner-wrapper">
            <a href="https://forms.gle/tdkhcTDf88X3wb636" target="_blank" rel="noopener noreferrer" className="cta-banner-btn">
                {/* Light sweep */}
                <span className="cta-banner-sweep" />
                <span className="cta-banner-text">
                    Fill this form and we will contact you
                </span>
            </a>
        </div>
    );
}

export default CtaBanner;
