import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import BookSection from "./BookSection";
import BookForm from "./BookForm";
import { useDispatch, useSelector } from "react-redux";
import fetchBook from "../redux/thunk/fetchBook";

const Homepage = () => {
  const [filterFeatured, setFilterFeatured] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook);
  }, [dispatch]);
  const handleSearch = (item) => {
    if (searchTerm) {
      return item.name.toLowerCase().includes(searchTerm?.toLocaleLowerCase());
    } else {
      return true;
    }
  };
  const handleFeature = (item) => {
    if (filterFeatured) {
      return item.featured;
    } else {
      return true;
    }
  };

  return (
    <>
      <Navbar onSearch={setSearchTerm} />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <BookSection
            onUpdate={setIsUpdate}
            onSearch={handleSearch}
            onFilter={setFilterFeatured}
            setFilter={handleFeature}
          />
          <div>
            <BookForm isUpdate={isUpdate} onUpdate={setIsUpdate} />
          </div>
        </div>
      </main>
    </>
  );
};

export default Homepage;
