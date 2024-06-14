
import React from 'react';
import BlogPost from './BlogPost';
import './BlogList.css';

function BlogList() {
  const posts = [
    {
      title: 'First Blog Post',
      content: 'This is the content of the first blog post.'
    },
    {
      title: 'Second Blog Post',
      content: 'This is the content of the second blog post.'
    },
    {
      title: 'Third Blog Post',
      content: 'This is the content of the third blog post.'
    }
  ];

  return (
    <div className="blog-list">
      {posts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
}

export default BlogList;
