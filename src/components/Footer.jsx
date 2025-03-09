import React from 'react';
import "../styles/Footer.css";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 CrowdFund. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/terms">Terms</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
