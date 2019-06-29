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

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button
          onClick={() => 
            fetch(`${process.env.REACT_APP_SERVER}/`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify({test: "test"}), // body data type must match "Content-Type" header
        })
        .then(response => console.log(response))}
        >Click Me</button>
        
      </header>
    </div>
  );
}

export default App;
