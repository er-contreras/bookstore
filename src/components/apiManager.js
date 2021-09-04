import { getBooks, addBook, removeBook } from '../redux/books/books';
// GET, POST & DELETE --------API-------->
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GJJdZrOtr2wngou75KwH';

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
        [{
          category: newBook.category,
          title: newBook.title,
        }],
      ]),
    );
  });
};

export const removeBooksThunk = (id) => (dispatch) => {
  deleteBooksAPI(id).then(() => {
    dispatch(removeBook(id));
  });
};
