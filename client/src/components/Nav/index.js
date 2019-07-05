import React from "react";
import { Link} from "react-router-dom";
import "./index.css";


function NavBar(props) {
  return (

  <div container-fluid>
    <ul className="nav navBar justify-content-end" style={{border: 'double 20px gold'}}>
 

      <li className="nav-item">
        <Link to="/" role="button" className="btn btn-link">
        <span className= "nav-span" style={{color:window.location.pathname === "/" ? "gold" : "white"}}>Home</span> 
        </Link>
      </li>
      {/* <li className="nav-item">
      <Link to="/saved"role="button" className="btn btn-link">
      <span style={{ color: window.location.pathname === "/saved" ? "green" : "white", fontSize:'30px'}}>Saved</span>    

        </Link>
      </li> */}
      <li className="nav-item">

      <Link to="/login" role="button" className="btn btn-link navBtn">
      <span className= "nav-span" style={{ color: window.location.pathname === "/login" ? "gold" : "white"}}>Login</span> 
      </Link>
      </li>
      <li className="nav-item">
      <Link to="/signup" role="button" className="btn btn-link navBtn">
      <span className= "nav-span" style={{ color: window.location.pathname === "/signup" ? "gold" : "white"}}>Sign Up</span>  

      </Link>
      </li>
    </ul>
  </div>
  );
}

export default NavBar;
