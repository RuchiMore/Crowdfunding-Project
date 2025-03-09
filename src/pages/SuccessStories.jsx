import React from 'react';
import '../styles/pages/SuccessStories.css';

const SuccessStories = () => {
  return (
    <div className="success-stories">
      <h1>Success Stories</h1>
      <div className="story">
        <h2>Campaign 1 Success</h2>
        <p>This campaign raised $50,000 to support children in need.</p>
      </div>
      <div className="story">
        <h2>Campaign 2 Success</h2>
        <p>This campaign raised $100,000 to fund a clean water project.</p>
      </div>
    </div>
  );
};

export default SuccessStories;
