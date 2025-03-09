import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Crowdfunding</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/" className="sidebar-link">Home</Link>
        </li>
        <li>
          <Link to="/explore" className="sidebar-link">Explore</Link>
        </li>
        <li>
          <Link to="/campaign/:id" className="sidebar-link">Campaign Details</Link>
        </li>
        <li>
          <Link to="/create" className="sidebar-link">Create Campaign</Link>
        </li>
        <li>
          <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile" className="sidebar-link">Profile</Link>
        </li>
        <li>
          <Link to="/login" className="sidebar-link">Login</Link>
        </li>
        <li>
          <Link to="/about" className="sidebar-link">About</Link>
        </li>
        <li>
          <Link to="/contact" className="sidebar-link">Contact</Link>
        </li>
        <li>
          <Link to="/faq" className="sidebar-link">FAQ</Link>
        </li>
        <li>
          <Link to="/terms" className="sidebar-link">Terms</Link>
        </li>
        <li>
          <Link to="/privacy" className="sidebar-link">Privacy</Link>
        </li>
        <li>
          <Link to="/success-stories" className="sidebar-link">Success Stories</Link>
        </li>
        <li>
          <Link to="/notifications" className="sidebar-link">Notifications</Link>
        </li>
        <li>
          <Link to="/support" className="sidebar-link">Support</Link>
        </li>
        <li>
          <Link to="/admin" className="sidebar-link">Admin Dashboard</Link>
        </li>
        <li>
          <Link to="/blog" className="sidebar-link">Blog</Link>
        </li>
        <li>
          <Link to="/referral" className="sidebar-link">Referral</Link>
        </li>
        <li>
          <Link to="/investor" className="sidebar-link">Investor</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
