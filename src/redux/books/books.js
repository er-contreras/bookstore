// npm-module-or-app/reducer/ACTION_TYPE
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = {
  books: [
    { id: 11, title: 'Butterflies', author: 'Jason' },
    { id: 12, title: 'Doggies', author: 'Carmen' },
    { id: 13, title: 'Steppenwolf', author: 'Claudio' },
  ],
};

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => { // eslint-disable-line
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, action.payload,
      ];
    /*
    return a new state object in which the books array will contain a new book object,
     passed by action.payload.
    Remember -  you MUSN'T mutate the state.
     You have to return a new state object - i.e.:
    return [ ...state, action.payload];
    */
    case REMOVE_BOOK:
      return state.filter((book) => book);
      /*
      use ES6 filter() method to create a new array,
      which will not contain the book you want to remove
        from the store (filter by the id key - i.e.:
      return state.filter(book => book.id !== id);
      */
    default:
      return state;
  }
};

export default reducer;
