import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
// import { addBook, removeBook } from '../redux/books/books'; // eslint-disable-line
import { getBooksThunk, addBookThunk, removeBooksThunk } from './apiManager';

const Books = () => {
  // Used to change the state or data in the store
  const dispatch = useDispatch();
  // Used to save the store in a variable
  const books = useSelector((store) => store.books);
  // console.log(books[0].id);
  useEffect(() => {
    dispatch(getBooksThunk());
  }, []);

  return (
    <div>
      {console.log(books)}
      {books.map((book) => (
        <ul key={book[0]}>
          <>
            <li>{book[1][0].title}</li>
            <input
              type="button"
              name="remove"
              value="Remove"
              onClick={() => {
                dispatch(removeBooksThunk(book[0]));
              }}
            />
          </>
        </ul>
      ))}
      <h2>Books List</h2>
      <form>
        <label htmlFor="book">
          ADD NEW BOOK
          <input id="bookName" type="text" placeholder="Book Title" />
          <select id="category">
            <option value="">Category</option>
            <option value="horror">Horror</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="comedy">Comedy</option>
            <option value="fantasy">Fantasy</option>
          </select>
          <input
            type="submit"
            name="book"
            id="book"
            value="Add Book"
            onClick={() => {
              const bookName = document.getElementById('bookName');
              const category = document.getElementById('category');
              const addPaper = {
                item_id: uuidv4(),
                title: bookName.value,
                category: category.value,
              };
              dispatch(addBookThunk(addPaper));
            }}
          />
        </label>
      </form>
    </div>
  );
};

export default Books;
