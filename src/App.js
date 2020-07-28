import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './home/Home';
import Movie from './movie/Movie';

const NotFound = () => {
  return (
    <h2>404 Not Found</h2>
  )
}

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/" >Movie Finder 2</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/movie/:id" component={Movie}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
