import { ADDBOOK, DELETEBOOK, LOADBOOK, UPDATEBOOK } from "./action";

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADBOOK:
      return action.payload;
    case ADDBOOK:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    case UPDATEBOOK:
      return state.map((book) => {
        if (book.id === action.payload.id) {
          return { ...action.payload };
        }
        return book;
      });
    case DELETEBOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
