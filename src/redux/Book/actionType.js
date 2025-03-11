import { ADDBOOK, DELETEBOOK, LOADBOOK, UPDATEBOOK } from "./action";

export const loadBook = (bookInfo) => {
  return {
    type: LOADBOOK,
    payload: bookInfo,
  };
};
export const addBook = (bookInfo) => {
  return {
    type: ADDBOOK,
    payload: bookInfo,
  };
};
export const updateBook = (bookId) => {
  return {
    type: UPDATEBOOK,
    payload: bookId,
  };
};
export const deleteBook = (bookId) => {
  return {
    type: DELETEBOOK,
    payload: bookId,
  };
};
