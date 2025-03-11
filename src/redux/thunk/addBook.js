import { addBook } from "../Book/actionType";

const addBookThunk = (bookInfo) => {
  return async (dispatch, getState) => {
    try {
      const newId = (state) =>
        state.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1;
      const id = newId(getState());
      const response = await fetch("http://localhost:9000/books", {
        method: "POST",
        body: JSON.stringify({ ...bookInfo, id: id }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const book = await response.json();
      dispatch(addBook(book));
    } catch (error) {
      console.log(error);
    }
  };
};

export default addBookThunk;
