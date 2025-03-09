import React from 'react';
import '../styles/pages/Investor.css';
import "../App.css";

const Investor = () => {
  return (
    <div className="investor">
      <h1>Become an Investor</h1>
      <p>Invest in campaigns that matter and support innovative projects to make an impact.</p>
      <div className="investment-options">
        <div className="option">
          <h2>Early-stage Campaigns</h2>
          <p>Invest in new and emerging campaigns with the potential for high returns.</p>
        </div>
        <div className="option">
          <h2>Established Campaigns</h2>
          <p>Support campaigns with a proven track record and a higher level of stability.</p>
        </div>
      </div>
    </div>
  );
};

export default Investor;
