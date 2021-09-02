import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // eslint-disable-line
import { addBook, removeBook } from '../redux/books/books'; // eslint-disable-line

const Books = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Books List</h2>
      <form>
        <label htmlFor="book">
          ADD NEW BOOK
          <input type="text" />
          <select id="category">
            <option value="">Category</option>
            <option value="horror">Horror</option>
            <option value="action">Action</option>
            <option value="adventure">Adventure</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="comedy">Comedy</option>
            <option value="fantasy">Fantasy</option>
          </select>
          <input type="submit" name="book" id="book" value="Add Book" onClick={() => dispatch(addBook())} />
        </label>
      </form>
    </div>
  );
};

export default Books;
