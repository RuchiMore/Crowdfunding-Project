import React from 'react';
import '../styles/pages/Blog.css';
import "../App.css";

const Blog = () => {
  return (
    <div className="blog">
      <h1>Our Blog</h1>
      <p>Stay updated with the latest news and stories from the crowdfunding world.</p>
      <div className="blog-posts">
        <div className="post">
          <h2>Post Title 1</h2>
          <p>This is a short preview of the blog post content. Read more...</p>
        </div>
        <div className="post">
          <h2>Post Title 2</h2>
          <p>This is a short preview of the blog post content. Read more...</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
