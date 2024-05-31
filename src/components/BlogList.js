import React from 'react';
import BlogPost from './BlogPost';
import './BlogList.css';

const posts = [
  {
    id: 1,
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.',
  },
  {
    id: 2,
    title: 'Second Blog Post',
    content: 'This is the content of the second blog post.',
  },
  {
    id: 3,
    title: 'Third Blog Post',
    content: 'This is the content of the third blog post.',
  },
];

const BlogList = () => {
  return (
    <div className="BlogList">
      {posts.map(post => (
        <BlogPost key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default BlogList;
