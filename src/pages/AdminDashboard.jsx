import React from 'react';
import '../styles/pages/AdminDashboard.css';
import "../App.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="dashboard-overview">
        <div className="card">
          <h3>Total Campaigns</h3>
          <p>50</p>
        </div>
        <div className="card">
          <h3>Total Donations</h3>
          <p>$200,000</p>
        </div>
        <div className="card">
          <h3>Active Campaigns</h3>
          <p>20</p>
        </div>
        <div className="card">
          <h3>Pending Approvals</h3>
          <p>5</p>
        </div>
      </div>

      <h2>Recent Campaigns</h2>
      <table className="campaigns-table">
        <thead>
          <tr>
            <th>Campaign Name</th>
            <th>Creator</th>
            <th>Status</th>
            <th>Donations Raised</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Save the Earth</td>
            <td>John Doe</td>
            <td>Active</td>
            <td>$10,000</td>
          </tr>
          <tr>
            <td>Build a School</td>
            <td>Jane Smith</td>
            <td>Pending</td>
            <td>$5,000</td>
          </tr>
          <tr>
            <td>Medical Research</td>
            <td>Mary Johnson</td>
            <td>Active</td>
            <td>$30,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
