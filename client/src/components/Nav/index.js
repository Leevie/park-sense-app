import React from "react";
import { Link} from "react-router-dom";
import "./index.css";

function NavBar(props) {
  return (
    <ul className="nav navBar">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
      <Link to="/saved" className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}>
          Saved
        </Link>
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
