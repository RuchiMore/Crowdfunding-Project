import React from 'react';
import '../styles/pages/Dashboard.css';
import "../App.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Your Campaigns</h3>
          <p>3 Campaigns</p>
        </div>
        <div className="stat-card">
          <h3>Total Funds Raised</h3>
          <p>$50,000</p>
        </div>
        <div className="stat-card">
          <h3>Pending Campaigns</h3>
          <p>1 Campaign</p>
        </div>
      </div>
      <h2>Your Active Campaigns</h2>
      <div className="active-campaigns">
        <div className="campaign">
          <h3>Save the Earth</h3>
          <p>Status: Active</p>
          <p>Funds Raised: $15,000</p>
        </div>
        <div className="campaign">
          <h3>Build a School</h3>
          <p>Status: Pending</p>
          <p>Funds Raised: $5,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
