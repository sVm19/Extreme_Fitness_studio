import SocialCard from '../SocialCard/SocialCard';
import './SocialLinks.css';

const SOCIALS = [
    {
        platform: 'whatsapp',
        label: 'WhatsApp',
        href: 'https://wa.me/message/CGKTEQRZTOLXP1',
        icon: (
            <svg viewBox="0 0 24 24"><path d="M12.04 2A9.93 9.93 0 0 0 2.1 11.95a9.86 9.86 0 0 0 1.47 5.2L2 22l4.97-1.53a9.9 9.9 0 0 0 5.07 1.38A9.95 9.95 0 0 0 12.04 2Zm0 18.14a8.23 8.23 0 0 1-4.36-1.24l-.31-.19-3.23 1 1.02-3.1-.21-.34a8.13 8.13 0 1 1 7.09 3.87Zm4.52-6.08c-.25-.13-1.47-.73-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.98-.15.17-.29.19-.54.06a6.8 6.8 0 0 1-2-1.23 7.54 7.54 0 0 1-1.39-1.72c-.15-.25 0-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.56-1.35-.76-1.85-.2-.48-.41-.42-.56-.43h-.48a.92.92 0 0 0-.67.31 2.82 2.82 0 0 0-.88 2.1 4.9 4.9 0 0 0 1.02 2.6 11.24 11.24 0 0 0 4.29 3.79c.6.26 1.07.41 1.43.53.6.19 1.15.17 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.16-.48-.28Z" /></svg>
        ),
    },
    {
        platform: 'facebook',
        label: 'Facebook',
        href: 'https://www.facebook.com/share/18ahBoNdxi/',
        icon: (
            <svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.88h-2.33v6.99A10 10 0 0 0 22 12Z" /></svg>
        ),
    },
    {
        platform: 'instagram',
        label: 'Instagram',
        href: 'https://www.instagram.com/sugandhsingh.coach?igsh=Z2ZxYXZoNnVpZnlo&utm_source=qr',
        icon: (
            <svg viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" /></svg>
        ),
    },
    {
        platform: 'youtube',
        label: 'YouTube',
        href: 'https://www.youtube.com/@SugandhSingh-coach',
        icon: (
            <svg viewBox="0 0 24 24"><path d="M21.54 7.2a2.74 2.74 0 0 0-1.93-1.93C17.88 4.75 12 4.75 12 4.75s-5.88 0-7.61.52A2.74 2.74 0 0 0 2.46 7.2 28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .46 4.8 2.74 2.74 0 0 0 1.93 1.93c1.73.52 7.61.52 7.61.52s5.88 0 7.61-.52a2.74 2.74 0 0 0 1.93-1.93A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.46-4.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" /></svg>
        ),
    },
];

function SocialLinks() {
    return (
        <div className="social-box">
            <div className="social-box-header">
                <h2 className="social-box-heading">JOIN US TODAY</h2>
                <p className="social-box-sub">Start your transformation journey.</p>
            </div>

            <div className="social-box-buttons">
                {SOCIALS.map((s) => (
                    <SocialCard
                        key={s.platform}
                        platform={s.platform}
                        label={s.label}
                        href={s.href}
                        icon={s.icon}
                    />
                ))}
            </div>
        </div>
    );
}

export default SocialLinks;
