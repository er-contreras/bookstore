import { createStore, combineReducers, applyMiddleware } from 'redux'; // eslint-disable-line
import logger from 'redux-logger';

const initialState = {
  books: [
    { id: 11, title: 'Butterflies', author: 'Jason' },
    { id: 12, title: 'Doggies', author: 'Carmen' },
    { id: 13, title: 'Steppenwolf', author: 'Claudio' },
  ],
};

const reducer = (state = initialState, action) => state; // eslint-disable-line

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
