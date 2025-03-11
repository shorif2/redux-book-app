import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../redux/Book/actionType";
import addBookThunk from "../redux/thunk/addBook";

const BookForm = ({ isUpdate, onUpdate }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  useEffect(() => {
    if (isUpdate) {
      setFormData(isUpdate);
    }
  }, [isUpdate]);

  const handleChange = (e) => {
    const field = e.target.name;
    switch (field) {
      case "price":
        setFormData({ ...formData, [field]: Number(e.target.value) });
        break;

      case "rating":
        setFormData({ ...formData, [field]: Number(e.target.value) });
        break;

      case "featured":
        setFormData((prev) => {
          return { ...formData, [field]: !prev.featured };
        });
        break;

      default:
        setFormData({ ...formData, [field]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdate) {
      dispatch(updateBook(formData));
    } else {
      dispatch(addBookThunk(formData));
    }

    setFormData({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
    onUpdate(false);
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">
        {isUpdate ? "Update Book" : "Add New Book"}
      </h4>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            value={formData.author}
            onChange={handleChange}
            name="author"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            value={formData.thumbnail}
            onChange={handleChange}
            name="thumbnail"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookprice"
              value={formData.price}
              onChange={handleChange}
              name="price"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="1"
              max="5"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="w-4 h-4"
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
          {isUpdate ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default BookForm;
