import profileImage from '../assets/Bildad Kipkirui.jpeg'

export function ProfileImage() {
  return (
    <div className="profile-image-wrap" aria-label="Profile illustration for BillyDev">
      <div className="profile-glow" aria-hidden="true" />
      <img
        src={profileImage}
        alt="BillyDev profile photo"
        className="profile-image"
        loading="eager"
      />
    </div>
  )
}
