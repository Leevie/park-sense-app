import React from "react";
import { Link} from "react-router-dom";
function NavBar(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => props.handlePageChange("Home")}
          className={props.currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
      <Link to="/login" role="button" className="btn btn-link">
        Login
      </Link>
      </li>
      <li className="nav-item">
      <Link to="/signup" role="button" className="btn btn-link">
        Sign Up
      </Link>
      </li>
    </ul>
  );
}

export default NavBar;
