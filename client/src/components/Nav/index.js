import React from "react";
import { Link} from "react-router-dom";
import "./index.css";


function NavBar(props) {
  return (
  
    <ul className="nav navBar" style={{border: 'solid white', margin:'15px'}}>
      <li className="nav-item">
        <Link to="/" role="button" className="btn btn-link">
        <h1 style={{ color: 'white', color:'green', fontSize:'30px'}}>Home</h1> 
        </Link>
      </li>
      <li className="nav-item">
      <Link to="/saved"role="button" className="btn btn-link">
      <h1 style={{ color: 'white', fontSize:'30px'}}>Saved</h1>    
        </Link>
      </li>
      <li className="nav-item">
      <Link to="/login" role="button" className="btn btn-link">
      <h1 style={{ color: 'white',fontSize:'30px'}}>Login</h1> 
      </Link>
      </li>
      <li className="nav-item">
      <Link to="/signup" role="button" className="btn btn-link">
      <h1 style={{ color: 'white', fontSize:'30px'}}>Sign Up</h1>  
      </Link>
      </li>
    </ul>
  );
}

export default NavBar;
