import { v4 as uuidv4 } from 'uuid';
// CONSTANTS
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialData = [
  { id: uuidv4(), title: 'Prime', author: 'James Bond' },
];

const reducer = (state = initialData, action) => {
  // If our case action.type is 'ADD_BOOK' it will return what it is inisde the curley braces
  // otherwise return another case.
  // console.log(state[0].id, action);
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      // console.log('hola!', action.payload);
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

// export const addBook = () => async (dispatch, getState) => {
//   try {
//     const res = await axios.get(url)
//     dispatch({
//       type: ADD_BOOK,
//       payload: res.data.results,
//     }
//   } catch (error) {
//     console.log(error)
//   }
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
