import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import NewBlog from './components/Home/Header/NewBlog';

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Route path='/NewBlog' component={NewBlog} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default App;
