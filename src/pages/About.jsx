import React from 'react';
import '../styles/pages/About.css';
import "../App.css";

const About = () => {
  return (
    <div className="about-container">
    {/* Hero Section */}
    <div className="about-hero">
      <h1>About Our Crowdfunding Platform</h1>
      <p>Empowering innovators and dreamers to bring their projects to life.</p>
    </div>

    {/* About Content */}
    <div className="about-content">
      <h2>Who We Are</h2>
      <p>
        We are a passionate team dedicated to helping individuals and organizations raise
        funds for their creative ideas, startups, and community projects. Our platform
        bridges the gap between visionaries and supporters worldwide.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to provide a secure, user-friendly, and transparent crowdfunding
        platform where anyone can turn their dreams into reality with the help of a
        supportive community.
      </p>

      {/* Key Features Section */}
      <div className="about-features">
        <div className="feature-card">
          <h3>🔍 Discover Projects</h3>
          <p>Explore a variety of innovative campaigns and support the causes you love.</p>
        </div>
        <div className="feature-card">
          <h3>💡 Start a Campaign</h3>
          <p>Launch your project, set your funding goal, and start raising funds.</p>
        </div>
        <div className="feature-card">
          <h3>🔒 Secure Payments</h3>
          <p>We ensure a safe and reliable payment process for all transactions.</p>
        </div>
        <div className="feature-card">
          <h3>🌍 Global Community</h3>
          <p>Join a diverse community of backers and creators from around the world.</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;
