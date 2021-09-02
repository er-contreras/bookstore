import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './components/renderBooks';
import Categories from './components/categories';
import Navbar from './components/Navbar';
import generateStore from './redux/configureStore';

function App() {
  const store = generateStore();
  return (
    <>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Provider store={store}>
              <Books />
            </Provider>
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
