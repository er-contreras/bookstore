import { v4 as uuidv4 } from 'uuid';
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

const initialData = [
  { item_id: uuidv4(), title: 'Prime', category: 'Comedy' },
];

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
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

// GET, POST & DELETE --------API-------->
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GJJdZrOtr2wngou75KwH/';

const getBooksAPI = async () => {
  const response = await fetch(`${url}/books`, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response.json();
};

const createBookAPI = async (newBook) => {
  const response = await fetch(`${url}/books`, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};

const deleteBooksAPI = async (id) => {
  const response = await fetch(`${url}/books/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};

export const getBooksThunk = () => (dispatch) => {
  getBooksAPI().then((res) => {
    dispatch(getBooks(Object.entries(res)));
  });
};

export const addBookThunk = (newBook) => (dispatch) => {
  createBookAPI(newBook).then(() => {
    dispatch(
      addBook([
        newBook.item_id,
        [{ category: newBook.category, title: newBook.title }],
      ]),
    );
  });
};

export const removeBooksThunk = (id) => (dispatch) => {
  deleteBooksAPI(id).then(() => {
    dispatch(removeBook(id));
  });
};

export default reducer;
