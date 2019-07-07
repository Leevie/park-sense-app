import React from 'react';
import './App.css';
import Home from "./components/pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ReviewFrom from "./components/Review-Form"
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

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

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
      <div>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/review" component={ReviewFrom} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Route path="/:id" component={Park} /> */}
        <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
      </div>
    </Router>
    </Provider>
    </div>
  );
}

export default App;
