
import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BlogList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
