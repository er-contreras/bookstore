import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();

  const books = useSelector((store) => store.books);
  // console.log(books[0].id);

  return (
    <div>
      {/* {console.log(books)} */}
      {books.map((book) => (
        <ul key={book.id}>
          <>
            {/* {console.log(book.id)} */}
            <li>{book.title}</li>
            <input
              type="button"
              name="remove"
              value="Remove"
              onClick={() => {
                dispatch(removeBook(book.id));
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
              const addPaper = {
                id: uuidv4(),
                title: bookName.value,
              };
              dispatch(addBook(addPaper));
            }}
          />
        </label>
      </form>
    </div>
  );
};

export default Books;
