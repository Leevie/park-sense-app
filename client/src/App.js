import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from "./components/pages/Home";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Router>
      <div>
      
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/saved" component={Saved} /> */}
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path="/:id" component={Park} /> */}
      </div>
    </Router>

    </div>
  );
}

export default App;
