import React from "react";
import "./index.css";

function Navbar({ className,onClick }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Park Rangers
      </a>
      <a
          className="App-link"
          href="/saved"
          target="_blank"
          rel="noopener noreferrer"
        >
          Saved
        </a>
      <button className="btn btn-lg login" onClick={onClick}>Login</button>
      <button className="btn btn-lg signup" onClick={onClick}>Sign up</button>
    </nav>
  );
}

export default Navbar;