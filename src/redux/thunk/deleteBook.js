import { deleteBook } from "../Book/actionType";

const deleteBookThunk = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:9000/books/${id}`, {
        method: "DELETE",
      });

      dispatch(deleteBook(id));
    } catch (error) {
      console.log(error);
    }
  };
};

export default deleteBookThunk;
