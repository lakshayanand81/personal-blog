import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, content }) => {
  return (
    <div className="BlogPost">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default BlogPost;
