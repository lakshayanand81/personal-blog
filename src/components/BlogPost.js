
import React, { useState } from 'react';
import './BlogPost.css';

function BlogPost({ title, content }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="blog-post">
      <h2>{title}</h2>
      <p>{content}</p>
      <button onClick={handleLike}>Like ({likes})</button>
    </div>
  );
}

export default BlogPost;
