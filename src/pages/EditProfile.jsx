import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/ProfilePage.css";

const ProfilePage = () => {
  const navigate = useNavigate();
  
  // State to store form data
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "A passionate supporter of crowdfunding projects.",
    organization: "Startup",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", formData);
    navigate("/profile"); // Redirect back to profile
  };

  return (
    <div className="edit-profile-container">
      <form className="edit-profile-card" onSubmit={handleSubmit}>
        <h2>Edit Profile</h2>
        
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />

        <label>Bio:</label>
        <textarea name="bio" value={formData.bio} onChange={handleChange}></textarea>

        <label>Organization:</label>
        <input type="text" name="organization" value={formData.organization} onChange={handleChange} />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfilePage;
