// CONSTANTS
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
// const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialData = {
  books: [],
};

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: action.payload,
      };
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
//     })
//   } catch (error) {
//     console.log(error)
//   }
// }

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

// export const removeBook = (payload) => ({
//   type: REMOVE_BOOK,
//   payload,
// });

export default reducer;
