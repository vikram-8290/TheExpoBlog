import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './styles.css';

const Header = () => (
  <header className='home-header'>
    <Router>
    <h2>The ExpoBlog</h2>
    <h1>
      <span>“</span> Blog <span>”</span>
    </h1>
    <p>
      Let's Create Some Blogs..
    </p>
    <Link to='./NewBlog'>
    <button className='btn-create'>Create New Blog</button>
    </Link>
    </Router>
  </header>
);

export default Header;
