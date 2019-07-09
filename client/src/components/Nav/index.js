import React from "react";
import { Link} from "react-router-dom";
import "./index.css";


function NavBar() {
  return (
    <div className="container">
    <ul className="nav navBar justify-content-end nav-fill">
      {/* <li>
        <a class="navbar-brand" href="#">
          <img src="/favicon.ico" width="30" class="d-inline-block align-top brand-ico" alt=""/>
          Parkify
        </a>
      </li> */}
      <li className="nav-item">
        <Link to="/" role="button" className="btn btn-link">
        <span className= "nav-span" style={{color:window.location.pathname === "/" ? "green" : "white"}}>Home</span> 
        </Link>
      </li>
      {/* <li className="nav-item">
      <Link to="/saved"role="button" className="btn btn-link">
      <span style={{ color: window.location.pathname === "/saved" ? "green" : "white", fontSize:'30px'}}>Saved</span>    
        </Link>
      </li> */}
      <li className="nav-item">
      <Link to="/login" role="button" className="btn btn-link">
      <span className= "nav-span" style={{ color: window.location.pathname === "/login" ? "green" : "white"}}>Login</span> 
      </Link>
      </li>
      <li className="nav-item">
      <Link to="/signup" role="button" className="btn btn-link">
      <span className= "nav-span" style={{ color: window.location.pathname === "/signup" ? "green" : "white"}}>Sign Up</span>  
      </Link>
      </li>
      <li className="nav-item">
      <Link to="/parksubmit" role="button" className="btn btn-link">
      <span className= "nav-span" style={{ color: window.location.pathname === "/parksubmit" ? "green" : "white"}}>Submit a Park!</span>  
      </Link>
      </li>

    </ul>
  </div>
  );
}

export default NavBar;
