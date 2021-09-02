import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import Action Creators
import { addBook, removeBook } from '../redux/books/books';

const dispatch = useDispatch();

const submitBookToStore = () => {
  const newBook = {
    id, // make sure it's unique
    title,
    author
  }

  // dispatch an action and pass it the newBook object (your action's payload)
  dispatch(addBook(newBook));
}

const Books = (props) => {
  const { books } = props; // eslint-disable-line
  return (
    <>
      <div>
        {books.map((book) => ( // eslint-disable-line
          <div key={book.id}>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
          </div>
        ))}
      </div>

      <button onClick={submitBookToStore}>Add Book</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(Books);
