import profileImage from '../assets/profile-placeholder.svg'

export function ProfileImage() {
  return (
    <div className="profile-image-wrap" aria-label="Profile illustration for BillyDev">
      <div className="profile-glow" aria-hidden="true" />
      <img
        src={profileImage}
        alt="Portrait placeholder for BillyDev"
        className="profile-image"
        loading="eager"
      />
    </div>
  )
}
