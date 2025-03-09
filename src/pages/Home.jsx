import React from 'react';
import '../styles/Home.css';
import background from "../assets/background.jpg";
import "../App.css";

const Home = () => {
  return (
    <div className="home" style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw"}}>
    
      <h1> Welcome to CrowdFund!!</h1>
      <p>Your platform for making a difference through crowdfunding.</p>
    </div>
  );
};

export default Home;
