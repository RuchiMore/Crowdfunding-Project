import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios for API calls
import "../styles/pages/Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
    userType: "Backer",
    agreeToTerms: false,
  });

  const navigate = useNavigate();

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      alert("You must agree to the Terms & Conditions!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Prepare FormData for backend
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.fullName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("username", formData.username);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("userType", formData.userType);

      if (formData.profilePicture) {
        formDataToSend.append("profilePicture", formData.profilePicture);
      }

      // Debugging: Log data before sending
      console.log("Sending Signup Request to:", "http://localhost:5000/api/auth/signup");
      console.log("Form Data:", formData);

      // Send Request to Backend
      const API_URL = "http://localhost:5000/api/auth/signup";
console.log("Sending Signup Request to:", API_URL);
console.log("Form Data:", formDataToSend);

try {
  const response = await axios.post(API_URL, formDataToSend, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  console.log("Signup Success:", response.data);
  alert("Signup successful! Please log in.");
  navigate("/login");
} catch (error) {
  console.error("Signup Error:", error.response?.data || error.message);
  alert(error.response?.data?.error || "Signup failed. Try again!");
}


      console.log("Signup Successful:", response.data);
      alert("Signup successful! Please log in.");
      navigate("/login");

    } catch (error) {
      console.error("Signup Error:", error.response?.data);
      alert(error.response?.data?.error || "Signup failed. Try again!");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="title">Sign Up</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <label>Full Name</label>
          <input type="text" name="fullName" className="input-field" placeholder="Enter full name" value={formData.fullName} onChange={handleChange} required />

          <label>Email Address</label>
          <input type="email" name="email" className="input-field" placeholder="Enter email" value={formData.email} onChange={handleChange} required />

          <label>Username (optional)</label>
          <input type="text" name="username" className="input-field" placeholder="Choose a username" value={formData.username} onChange={handleChange} />

          <label>Password</label>
          <input type="password" name="password" className="input-field" placeholder="Enter password" value={formData.password} onChange={handleChange} required />

          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" className="input-field" placeholder="Re-enter password" value={formData.confirmPassword} onChange={handleChange} required />

          <label>Profile Picture (Optional)</label>
          <input type="file" name="profilePicture" className="input-field file-upload" onChange={handleChange} />

          <label>User Type</label>
          <select name="userType" className="input-field" value={formData.userType} onChange={handleChange}>
            <option value="Backer">Backer</option>
            <option value="Creator">Creator</option>
          </select>

          <div className="terms-container">
            <input type="checkbox" id="terms" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} />
            <label htmlFor="terms">I agree to the Terms & Conditions</label>
          </div>

          <button type="submit" className="signup-btn">Sign Up</button>

          <p className="login-link">
            Already have an account? <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
