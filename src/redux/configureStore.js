import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import booksReducer from './books/books';

const rootReducer = combineReducers({
  books: booksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
}
