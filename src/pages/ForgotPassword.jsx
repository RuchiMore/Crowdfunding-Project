import React, { useState } from "react";
import "../styles/pages/ForgotPassword.css";
import "../App.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset email sent to:", email);
    alert("A password reset link has been sent to your email.");
    navigate("/login");
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h1 className="title">Forgot Password</h1>
        <form onSubmit={handleSubmit} className="forgot-password-form">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <button type="submit" className="forgot-password-btn">
            Reset Password
          </button>
        </form>
        <p className="back-to-login" onClick={() => navigate("/login")}>
          Back to Login
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
