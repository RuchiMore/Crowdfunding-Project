import React from 'react';
import '../styles/pages/Support.css';

const Support = () => {
  return (
    <div className="support">
      <h1>Support</h1>
      <p>If you need help, feel free to reach out to our support team.</p>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Support;
