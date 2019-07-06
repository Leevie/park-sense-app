
import React from "react";
import "./style.css";

function Jumbotron({ type = "default", className,onClick }) {
  return (
    <div className="jumbotron text-center">
       <h1 style={{fontSize: '160px', color: 'black', fontWeight:'bolder', border:"solid 18px green"}}>Parkify</h1> 
        <p style={{fontSize: '30px', fontWeight: 'bolder', color: 'white'}}>The Social App for Parks</p>
        <button onClick={onClick} className="btn btn-lg button mr-3 btn-warning">See parks by age</button>
        <button onClick={onClick} className="btn btn-lg button mr-3 btn-warning">See parks by area</button>
        <button onClick={onClick} className="btn btn-lg button mr-3 btn-warning">See parks by popularity</button>
    </div>
  );
}

export default Jumbotron;
