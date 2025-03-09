import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigate function
import { FaEdit } from "react-icons/fa";
import "../styles/pages/Profile.css";

const Profile = () => {
  const navigate = useNavigate(); // React Router navigation

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/120"
          alt="Profile Avatar"
          className="profile-avatar"
        />
        <h1 className="profile-title">John Doe</h1>
        <p className="profile-email">johndoe@example.com</p>

        <div className="profile-info">
          <p><strong>Bio:</strong> A passionate supporter of crowdfunding projects.</p>
          <p><strong>Organization:</strong> Startup</p>
        </div>

        {/* Button Navigates to Edit Profile Page */}
        <button className="edit-profile-btn" onClick={() => navigate("/edit-profile")}>
          <FaEdit className="edit-icon" /> Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
