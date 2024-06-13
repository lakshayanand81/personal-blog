
import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <BlogList />
      <BlogPost />
      <Footer />
    </div>
  );
}

export default App;
