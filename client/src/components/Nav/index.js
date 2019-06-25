import React from "react";
import "./index.css";

function Navbar({ className,onClick }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Park Rangers
      </a>
      <button onClick={onClick}>Login</button>
      <button onClick={onClick}>Sign up</button>
    </nav>
  );
}

export default Navbar;