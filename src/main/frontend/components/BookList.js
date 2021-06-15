import React, { useState, useEffect } from "react";
import BookTile from "./BookTile.js";

const BookList = (props) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch("/api/v1/books");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseData = await response.json();

      setBooks(responseData);
    } catch (error) {
      console.error(`Unable to complete data fetch`);
    }
  };
  
  useEffect(() => {
    fetchBooks();
  }, []);

  const bookObjects = books.map((book) => {
    return <BookTile key={book.id} book={book} />;
  });

  return <div>{bookObjects}</div>;
};

export default BookList;
