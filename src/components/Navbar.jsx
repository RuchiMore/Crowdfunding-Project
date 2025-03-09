// import React from 'react';
// import { Link } from 'react-router-dom';
// import "../styles/Navbar.css";
// import "../App.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
        
//       <div className="logo">
//         <Link to="/">CrowdFund</Link>
//       </div>
//       <ul className="nav-links">
//         <li><Link to="/explore">Explore</Link></li>
//         <li><Link to="/create">Create Campaign</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/profile">Profile</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Make sure the path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">CROWDFUND</Link>
      <ul className="navbar-links">
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/create-campaign">Create Campaign</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

