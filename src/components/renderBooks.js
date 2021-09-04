import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import styles from './bookStore.module.css';
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
      {books.map((book) => (
        <ul className={styles.bookContainer} key={book[0]}>
          <>
            <div id={styles.firstSection}>
              <div className={styles.info}>
                <li className={styles.category}>{book[1][0].category.toUpperCase()}</li>
                <li className={styles.title}>{book[1][0].title}</li>
                <input
                  type="button"
                  name="author"
                  value="Author"
                />
              </div>

              <div className={styles.management}>
                <input
                  type="button"
                  name="comments"
                  value="Comments"
                />
                <input
                  type="button"
                  name="remove"
                  value="Remove"
                  onClick={() => {
                    dispatch(removeBooksThunk(book[0]));
                  }}
                />
                <input
                  type="button"
                  name="edit"
                  value="Edit"
                />
              </div>
            </div>
            <div id={styles.progress}>
              <div id={styles.circle}>
                <div className={styles.hollow} />
              </div>
              <div className={styles.percentage}>
                <li>64%</li>
                <li>Completed</li>
              </div>
            </div>

            <div id={styles.chapter}>
              <li>CURRENT CHAPTER</li>
              <li>Chapter</li>
              <button className={styles.updateprogress} type="button">UPDATE PROGRESS</button>
            </div>
          </>
        </ul>
      ))}
      <div id={styles.addBook}>
        <h2>ADD NEW BOOK</h2>
        <form>
          <div id={styles.label} htmlFor="book">
            <input id="bookName" type="text" placeholder="Book Title" />
            <select id="category">
              <option value="Category">Category</option>
              <option value="Horror">Horror</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
              <option value="Sci-fi">Sci-fi</option>
              <option value="Comedy">Comedy</option>
              <option value="Fantasy">Fantasy</option>
            </select>
            <button
              type="submit"
              name="book"
              id="book"
              value="Add Book"
              placeholder="Book title"
              onClick={() => {
                const bookName = document.getElementById('bookName');
                const category = document.getElementById('category');
                const addPaper = {
                  item_id: uuidv4(),
                  title: bookName.value,
                  category: category.value,
                };
                dispatch(addBookThunk(addPaper));
                window.location.reload();
              }}
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Books;
