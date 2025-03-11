import { loadBook } from "../Book/actionType";

const fetchBook = async (dispatch) => {
  try {
    const response = await fetch("http://localhost:9000/books");
    const books = await response.json();
    dispatch(loadBook(books));
  } catch (error) {
    console.log(error);
  }
};

export default fetchBook;
