
import React from "react";
import "./style.css";

function Jumbotron({ type = "default", className,onClick }) {
  return (
    <div className="jumbotron text-center">
      <h1>Park Rangers</h1>
      <p>Review local parks in your area</p>
      <button onClick={onClick} className="btn btn-lg button mr-3">See parks by age</button>
      <button onClick={onClick} className="btn btn-lg button mr-3">See parks by area</button>
      <button onClick={onClick} className="btn btn-lg button">See parks by popularity</button>
    </div>
  );
}

export default Jumbotron;
