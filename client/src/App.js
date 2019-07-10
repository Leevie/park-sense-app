import React, { Component } from 'react';
import './App.css';
import Home from "./components/pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ParkSubmit from "./components/ParkSubmit"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import axios from "axios";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

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
        <Provider store={store}>
          <Router>
            <div>
              {this.state.loggedIn && <p>Welcome, {this.state.username}</p>}
              <Route exact path="/" render={(props) => <Home {...props} />} />
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/parksubmit" component={ParkSubmit} />
              <Route exact path="/login" render={() => <Login updateUser={this.updateUser} />} />
              <Route exact path="/signup" component={SignUp} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </Router>
        </Provider>
      </div>
    );
  }

}

export default App;
