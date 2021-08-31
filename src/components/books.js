import React from 'react';
import { connect } from 'react-redux';

const Books = (props) => {
  const { books } = props; // eslint-disable-line
  return (
    <div>
      {books.map((book) => ( // eslint-disable-line
        <div key={book.id}>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps)(Books);
