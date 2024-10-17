
import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ profile }) => {
  return (
    <div className="profile-card">
      <img src={profile.image} alt={profile.name} className="profile-image" />
      <h3>{profile.name}</h3>
      <p>Age: {profile.age}</p>
      <p>{profile.bio}</p>
    </div>
  );
};

export default ProfileCard;
