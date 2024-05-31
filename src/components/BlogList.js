import React from 'react';
import BlogPost from './BlogPost';
import './BlogList.css';

const posts = [
  {
    id: 1,
    title: 'First Blog Post',
    date: '2024-05-30',
    author: 'John Doe',
    image: 'https://via.placeholder.com/150',
    content: 'This is the content of the first blog post.',
  },
  {
    id: 2,
    title: 'Second Blog Post',
    date: '2024-05-31',
    author: 'Jane Smith',
    image: 'https://via.placeholder.com/150',
    content: 'This is the content of the second blog post.',
  },
  {
    id: 3,
    title: 'Third Blog Post',
    date: '2024-06-01',
    author: 'Alice Johnson',
    image: 'https://via.placeholder.com/150',
    content: 'This is the content of the third blog post.',
  },
];

const BlogList = () => {
  return (
    <div className="BlogList">
      {posts.map(post => (
        <BlogPost
          key={post.id}
          title={post.title}
          date={post.date}
          author={post.author}
          image={post.image}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default BlogList;
