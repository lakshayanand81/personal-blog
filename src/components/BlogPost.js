import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, date, author, image, content }) => {
  return (
    <div className="BlogPost">
      <img src={image} alt={title} className="BlogPost-image" />
      <div className="BlogPost-content">
        <h2>{title}</h2>
        <p className="BlogPost-meta">
          <span>{date}</span> by <span>{author}</span>
        </p>
        <p>{content}</p>
        <hr />
      </div>
    </div>
  );
};

export default BlogPost;
