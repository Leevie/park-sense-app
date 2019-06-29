import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./components/pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp/index";
import ReviewFrom from "./components/Review-Form"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
      <div>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/review" component={ReviewFrom} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        {/* <Route path="/:id" component={Park} /> */}
      </div>
    </Router>

    </div>
  );
}

export default App;
