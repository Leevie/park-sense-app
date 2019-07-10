import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import "./index.css";
import axios from "axios";

class NavBar extends Component {

  // Constructor for handling logins
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  // Logout functionality
  logout(event) {
    event.preventDefault();
    console.log("Attempting to log out...");
    axios.post("/api/users/logout").then(response => {
      console.log(response.data);
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: false,
          username: null
        });
      }
    }).catch(error => {
      console.log(`Error logging out: ${error}`);
    });
  }

  // Render
  render() {
    const loggedIn = this.props.loggedIn;
    console.log(`NavBar loggedIn: ${loggedIn}`);
    console.log(`NavBar props: ${this.props}`);

    return (
      <div className="container nav-code">
        <ul className="nav navBar justify-content-end nav-fill">
          {loggedIn ? (
            <li className="nav-item">
              <Link to="#" role="button" className="btn btn-link">
                <span className="nav-span" style={{ color: "white" }}>Welcome '{this.props.username}'!</span>
              </Link>
            </li>
          ) : ""}
          {loggedIn ? (
            <li className="nav-item">
              <Link to="#" role="button" className="btn btn-link" onClick={this.logout}>
                <span className="nav-span" style={{ color: window.location.pathname === "#" ? "green" : "white" }}>Logout</span>
              </Link>
            </li>
          ) : ""}
          <li className="nav-item">
            <Link to="/" role="button" className="btn btn-link">
              <span className="nav-span" style={{ color: window.location.pathname === "/" ? "green" : "white" }}>Home</span>
            </Link>
          </li>
          {!loggedIn ? (
            <li className="nav-item">
              <Link to="/login" role="button" className="btn btn-link">
                <span className="nav-span" style={{ color: window.location.pathname === "/login" ? "green" : "white" }}>Login</span>
              </Link>
            </li>
          ) : ""}
          {!loggedIn ? (
            <li className="nav-item">
              <Link to="/signup" role="button" className="btn btn-link">
                <span className="nav-span" style={{ color: window.location.pathname === "/signup" ? "green" : "white" }}>Sign Up</span>
              </Link>
            </li>
          ) : ""}
          <li className="nav-item">
            <Link to="/parksubmit" role="button" className="btn btn-link">
              <span className="nav-span" style={{ color: window.location.pathname === "/parksubmit" ? "green" : "white" }}>Submit a Park!</span>
            </Link>
          </li>

        </ul>
      </div>
    );
  }


}

export default NavBar;
