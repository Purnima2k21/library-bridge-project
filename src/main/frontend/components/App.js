import React from "react";
import { hot } from "react-hot-loader/root";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import "regenerator-runtime/runtime";

import BookList from "./BookList.js";
import BookShow from "./BookShow.js";
import NewBookForm from "./NewBookForm.js";
import NavBar from "./NavBar.js";

const App = (props) => {
  return (
    //<h1>Welcome to the launch library!</h1>
    <BrowserRouter>
      <NavBar />
      <Switch>

        <Route exact path="/books" component={BookList} />
        <Route exact path="/books/new" component={NewBookForm} />
        <Route exact path="/books/:id" component={BookShow} />

      </Switch>
    </BrowserRouter>
  );
};
export default hot(App);
