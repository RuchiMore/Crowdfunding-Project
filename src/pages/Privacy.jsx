import React from 'react';
import '../styles/pages/Privacy.css';

const Privacy = () => {
  return (
      <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>Last updated: February 28, 2025</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to our crowdfunding platform. Your privacy is important to us. 
          This Privacy Policy explains how we collect, use, and protect your information.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>Personal Information:</strong> Name, email, phone number, payment details.</li>
          <li><strong>Non-Personal Information:</strong> Browser type, IP address, device information.</li>
          <li><strong>Cookies:</strong> We use cookies to enhance your experience.</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide and improve our services.</li>
          <li>To process payments securely.</li>
          <li>To send updates and notifications.</li>
          <li>To comply with legal requirements.</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>
          We use encryption and secure servers to protect your data. However, no 
          method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <ul>
          <li>You can update or delete your personal information.</li>
          <li>You can opt-out of marketing communications.</li>
          <li>You can request a copy of your stored data.</li>
        </ul>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at support@crowdfunding.com.</p>
      </section>
    </div>
  );
};

export default Privacy;
