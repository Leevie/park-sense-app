import React from "react";
import { Link} from "react-router-dom";
import "./index.css";


function NavBar(props) {
  return (
  
    <ul className="nav navBar">
      <li className="nav-item">
        <Link to="/" role="button" className="btn btn-link">
        <h1 style={{ color: 'white'}}>Home</h1> 
        </Link>
      </li>
      <li className="nav-item">
      <Link to="/saved"role="button" className="btn btn-link">
      <h1 style={{ color: 'white'}}>Saved</h1>    
        </Link>
      </li>
      <li className="nav-item">
      <Link to="/login" role="button" className="btn btn-link">
      <h1 style={{ color: 'white'}}>Login</h1> 
      </Link>
      </li>
      <li className="nav-item">
      <Link to="/signup" role="button" className="btn btn-link">
      <h1 style={{ color: 'white'}}>Sign Up</h1>  
      </Link>
      </li>
    </ul>
  );
}

export default NavBar;
