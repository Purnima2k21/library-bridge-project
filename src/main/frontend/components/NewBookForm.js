import React, { useState } from "react";
import _ from "lodash"
import Error from "./Error"
import { Redirect } from "react-router-dom"


const NewBookForm = props => {
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    genre: "",
    totalPages: "",
    isbn: "",
    rating: ""
  });
  const [errors, setErrors] = useState([]);
  const [redirect, setRedirect] = useState(false);

  const addNewBook = async () => {
    try {
      const response = await fetch("/api/v1/books", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(newBook),
      });
      if (!response.ok) {
        if (response.status === 422) {
          const data = await response.json();
          return setErrors(data.errors);
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      } else {
        const data = await response.json();
        if (data) {
          setRedirect(true);
        }
      }
    } catch (error) {
      console.error(`Error in fetch: ${error}`);
    }
  };
  const handleInput = event => {
    setNewBook({
      ...newBook,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const validateInput = () => {
    let submissionErrors = {};
    const requiredFields = ["title", "author", "genre", "totalPages", "isbn"];
    requiredFields.forEach((field) => {
      if (newBook[field].trim() === "") {
        submissionErrors = { ...submissionErrors, [field]: `is required` };
      }
    });
    setErrors(submissionErrors);
    return _.isEmpty(submissionErrors);
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (validateInput()) {
      addNewBook();
    }
  };

  if (redirect) {
    return <Redirect to="/books" />;
  }
  return (
    <div>
      <h2>Donate a book:</h2>
      <form onSubmit={handleSubmit} className="book_app">
        <div className="grid-container">
          <div className="grid-x grid-padding-x">
            <div className="cell">
              <Error errors={errors} />
            </div>

            <div className="row">
              <div className="medium-6 columns">
                <label htmlFor="title">
                  Title:
                  <input
                    id="title"
                    type="text"
                    name="title"
                    onChange={handleInput}
                    value={newBook.title}
                  />
                </label>
              </div>

              <div className="medium-6 columns">
                <label htmlFor="author">
                  Author:
                  <input
                    id="author"
                    type="text"
                    name="author"
                    onChange={handleInput}
                    value={newBook.author}
                  />
                </label>
              </div>
            </div>

            <div className="row">
              <div className="medium-6 columns">
                <label htmlFor="genre">
                  Genre:
                  <input
                    id="genre"
                    type="text"
                    name="genre"
                    onChange={handleInput}
                    value={newBook.genre}
                  />
                </label>
              </div>

              <div className="medium-6 columns">
                <label htmlFor="totalPages">
                  Total Pages:
                  <input
                    id="totalPages"
                    type="text"
                    name="totalPages"
                    onChange={handleInput}
                    value={newBook.totalPages}
                  />
                </label>
              </div>
            </div>

            <div className="row">
              <div className="medium-6 columns">
                <label htmlFor="isbn">
                  ISBN:
                  <input
                    id="isbn"
                    type="text"
                    name="isbn"
                    onChange={handleInput}
                    value={newBook.isbn}
                  />
                </label>
              </div>

              <div className="medium-6 columns">
                <label htmlFor="rating">
                  Rating:
                  <input
                    id="rating"
                    type="text"
                    name="rating"
                    onChange={handleInput}
                    value={newBook.rating}
                  />
                </label>
              </div>
            </div>

            <input className="button round" type="submit" value="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default NewBookForm;
