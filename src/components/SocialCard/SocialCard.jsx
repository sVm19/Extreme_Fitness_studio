import './SocialCard.css';

function SocialCard({ icon, label, href = '#', platform = '' }) {
    return (
        <a
            href={href}
            className={`social-card ${platform}`}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="social-icon">{icon}</span>
            <span className="social-handle">{label}</span>
        </a>
    );
}

export default SocialCard;
