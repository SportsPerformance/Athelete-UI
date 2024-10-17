
import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = ({ onAddProfile }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProfile = {
      name,
      age,
      bio,
      image,
    };
    onAddProfile(newProfile);
    // Reset form
    setName('');
    setAge('');
    setBio('');
    setImage(null);
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h2>Create Profile</h2>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Age" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Bio" 
        value={bio} 
        onChange={(e) => setBio(e.target.value)} 
        required 
      />
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        required 
      />
      {image && <img src={image} alt="Profile Preview" className="image-preview" />}
      <button type="submit">Add Profile</button>
    </form>
  );
};

export default ProfileForm;
