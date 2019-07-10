import React, { Component } from 'react';
import './App.css';
import Home from "./components/pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ParkSubmit from "./components/ParkSubmit"
import { BrowserRouter as Router, Route} from "react-router-dom";
import axios from "axios";


class App extends Component {

  // Constructor for users
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  // Get user when component mounts
  componentDidMount() {
    this.getUser();
  }

  // Update with our user object
  updateUser(userObj) {
    this.setState(userObj);
  }

  // Get the logged in user
  getUser() {
    axios.get("/api/users").then(response => {
      console.log(`getUser Response is: ${response.data}`);
      if (response.data.user) {
        console.log(`getUser: There is a saved user`);
        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
        console.log(`My App.js state variables username: ${this.state.username}`);
        console.log(`My App.js state variables loggedIn: ${this.state.loggedIn}`);
      } else {
        console.log(`getUser: There is no saved user`);
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  // Render
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              {/* {this.state.loggedIn && <p>Welcome, {this.state.username}</p>} */}
              <Route exact path="/" render={() => <Home {...this.state} updateUser={this.updateUser} />} />
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/parksubmit" component={ParkSubmit} />
              <Route exact path="/login" render={() => <Login updateUser={this.updateUser} />} />
              <Route exact path="/signup" component={SignUp} />
            </div>
          </Router>
      </div>
    );
  }

}

export default App;
