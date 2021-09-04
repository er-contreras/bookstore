// import { v4 as uuidv4 } from 'uuid';
// CONSTANTS
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

export const getBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const initialData = [];

const reducer = (state = initialData, action) => {
  // If our case action.type is 'ADD_BOOK' it will return what it is inisde the curley braces
  // otherwise return another case.
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      // action.payload receive the id of the ul I have in the UI
      return state.filter((book) => book[0] !== action.payload);
    default:
      return state;
  }
};

export default reducer;
