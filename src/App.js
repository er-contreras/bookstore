import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Books from './redux/books/Books';
import Categories from './redux/categories/Categories';
import Navbar from './components/Navbar';

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
