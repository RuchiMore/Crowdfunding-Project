import React, { useState } from 'react';
import '../styles/pages/Referral.css';

const Referral = () => {
  const [referralCode, setReferralCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle referral logic (e.g., send code to backend)
    console.log('Referral Code:', referralCode);
  };

  return (
    <div className="referral">
      <h1>Referral Program</h1>
      <p>Invite your friends and earn rewards!</p>
      <form onSubmit={handleSubmit} className="referral-form">
        <input
          type="text"
          placeholder="Enter referral code"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
          className="referral-input"
        />
        <button type="submit">Submit</button>
      </form>
      <h3>Your Referral Code:</h3>
      <p>ABCD1234</p>
    </div>
  );
};

export default Referral;
