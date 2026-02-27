import './ProfileImage.css';

function ProfileImage({ src, alt }) {
    return (
        <div className="profile-wrapper">
            <div className="profile-ring">
                <img
                    className="profile-img"
                    src={src}
                    alt={alt}
                />
            </div>
        </div>
    );
}

export default ProfileImage;
