import './App.css';
import React, { useState, useEffect} from 'react'; // eslint-disable-line
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './books';
import Categories from './categories';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/books">
            <Books />
          </Route>

          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
