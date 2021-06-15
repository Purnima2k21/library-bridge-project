import React, { useEffect, useState } from "react";

const BookShow = (props) => {
  const [book, setBook] = useState([]);

  const getBook = async () => {
    try {
      const bookId = props.match.params.id;
      const response = await fetch(`/api/v1/books/${bookId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} ($ {response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const responseBody = await response.json();
      setBook(responseBody);
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };
  useEffect(() => {
    getBook();
  }, []);

  return (
    <div>
      <h1>{book.title}</h1>
      <ul>
        <li>Author: {book.author}</li>
        <li>Genre: {book.genre}</li>
        <li>Total Pages: {book.totalPages}</li>
        <li>isbn Number: {book.isbn}</li>
        <li>Rating: {book.rating}</li>
      </ul>
    </div>
  );
};

export default BookShow;
