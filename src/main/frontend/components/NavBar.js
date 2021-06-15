import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="title-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li>
            <Link to="/books">Home</Link>
          </li>
          <li>
            <Link to="/books/new">Donate a Book</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
