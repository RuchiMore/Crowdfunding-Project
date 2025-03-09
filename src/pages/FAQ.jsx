import React from 'react';
import '../styles/pages/FAQ.css';
import "../App.css";

const FAQ = () => {
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="question">
        <h2>What is crowdfunding?</h2>
        <p>Crowdfunding is the practice of funding a project or venture by raising small amounts of money from a large number of people.</p>
      </div>
      <div className="question">
        <h2>How can I create a campaign?</h2>
        <p>You can create a campaign by signing up and clicking the "Create Campaign" button on your dashboard.</p>
      </div>
    </div>
  );
};

export default FAQ;
