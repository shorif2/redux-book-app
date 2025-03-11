import { applyMiddleware, createStore } from "redux";
import bookReducer from "./Book/BookReducer";
import { thunk } from "redux-thunk";

const store = createStore(bookReducer, applyMiddleware(thunk));

export default store;
