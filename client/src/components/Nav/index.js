import React,{Component} from "react";
import { Link} from "react-router-dom";
import "./index.css";
import axios from "axios";

class NavBar extends Component {
  constructor() {
      super()
      this.logout = this.logout.bind(this)
  }
  logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        })
      }
    }).catch(error => {
        console.log('Logout error')
    })
  }

render() {
    const loggedIn = this.props.loggedIn;
    console.log('navbar render, props: ')
    console.log(this.props);
    
  return (
    <div container-fluid>{loggedIn ? (
<ul className="nav navBar justify-content-end">
<li className="nav-item" onClick={this.logout}>
        <Link to="/" role="button" className="btn btn-link">
        <span className= "nav-span" style={{color:window.location.pathname === "/" ? "green" : "white"}}>Logout</span> 
        </Link></li>
</ul>
    ):(
      
    <ul className="nav navBar justify-content-end">
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
    </ul>
    )}
  </div>
    
  );
    }
}

export default NavBar;
