import React from "react";
import { Link } from "react-router-dom";

const BookTile = (props) => {
  const { id, title } = props.book;
  console.log(title);

  return (
    <div className="book-tile">
      <h2>
        <Link to={`/books/${id}`}>{title}</Link>
      </h2>
    </div>
  );
};
export default BookTile;
