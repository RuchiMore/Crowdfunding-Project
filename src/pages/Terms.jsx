import React from 'react';
import '../styles/pages/Terms.css';

const Terms = () => {
  return (
    <div className="terms-container">
      <h1>Terms & Conditions</h1>
      <p>Last Updated: February 2025</p>

      {/* Section 1: Introduction */}
      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to our crowdfunding platform. By accessing or using our platform, 
          you agree to comply with and be bound by the following terms and conditions. 
          If you do not agree with any part of these terms, please do not use our services.
        </p>
      </section>

      {/* Section 2: User Obligations */}
      <section>
        <h2>2. User Obligations</h2>
        <ul>
          <li>Users must provide accurate and complete registration information.</li>
          <li>Projects must comply with all applicable laws and regulations.</li>
          <li>No fraudulent, misleading, or illegal activities are allowed.</li>
          <li>Users are responsible for the security of their accounts.</li>
        </ul>
      </section>

      {/* Section 3: Payment & Donations */}
      <section>
        <h2>3. Payments & Donations</h2>
        <p>
          All donations are processed securely. Refund policies vary by campaign, and 
          users should review campaign terms before making a contribution.
        </p>
      </section>

      {/* Section 4: Limitation of Liability */}
      <section>
        <h2>4. Limitation of Liability</h2>
        <p>
          We do not guarantee the success of any campaign. The platform is not responsible 
          for disputes between users, funders, or project creators.
        </p>
      </section>

      {/* Section 5: Changes to Terms */}
      <section>
        <h2>5. Changes to Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Continued use of the 
          platform after modifications means acceptance of the new terms.
        </p>
      </section>

      {/* Agreement Statement */}
      <p className="agreement">
        By using our platform, you agree to these terms and conditions.
      </p>
    </div>
  );
};

export default Terms;
