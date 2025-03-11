import React from "react";
import BookCart from "./BookCart";
import { useSelector } from "react-redux";

const BookSection = ({ onUpdate, onSearch, onFilter, setFilter }) => {
  const books = useSelector((state) => state);
  return (
    <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => onFilter(false)}
            className="filter-btn active-filter"
            id="lws-filterAll"
          >
            All
          </button>
          <button
            onClick={() => onFilter(true)}
            className="filter-btn"
            id="lws-filterFeatured"
          >
            Featured
          </button>
        </div>
      </div>
      <div className="lws-bookContainer">
        {/* <!-- Card 1 --> */}
        {books
          .filter(onSearch)
          .filter(setFilter)
          .map((book) => (
            <BookCart key={book.id} book={book} onUpdate={onUpdate} />
          ))}
      </div>
    </div>
  );
};

export default BookSection;
