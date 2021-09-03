import { v4 as uuidv4 } from 'uuid';
// CONSTANTS
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialData = [
  { item_id: uuidv4(), title: 'Prime', category: 'Comedy' },
];

const reducer = (state = initialData, action) => {
  // If our case action.type is 'ADD_BOOK' it will return what it is inisde the curley braces
  // otherwise return another case.
  switch (action.type) {
    case ADD_BOOK:
      // console.log(state);
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      // console.log('hola!', action.payload);
      // action.payload receive the id of the ul I have in the UI
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

// export const addBook = () => async (dispatch, getState) => { // eslint-disable-line
//   const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GJJdZrOtr2wngou75KwH/books';
//   try {
//     const res = await axios.get(url);
//     dispatch({
//       type: ADD_BOOK,
//       payload,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const addBook = (someValue) => {
//   const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/GJJdZrOtr2wngou75KwH/';
//   return (dispatch, getState) => {
//     dispatch({ type: ADD_BOOK });

//     url.post("/books", {
//       data: someValue
//     })
//       .then(
//         response => dispatch({ type: "REQUEST_SUCCEEDED", payload: response }),
//         error => dispatch({ type: "REQUEST_FAILED", error: error })
//       );
//   };
// }

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export default reducer;
