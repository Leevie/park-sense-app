import React, { Component} from 'react';
import './App.css';
import Home from "./components/pages/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ReviewFrom from "./components/Review-Form"
import { BrowserRouter as Router, Route, } from "react-router-dom";
import axios from "axios";
class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }
  render (){
  return (
    <div className="App">
        <Router>
      <div>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/review" component={ReviewFrom} />
        <Route exact path="/login" render={() =>
            <Login
              updateUser={this.updateUser}
            />}/>
        <Route exact path="/signup" component={SignUp} />
        {/* <Route path="/:id" component={Park} /> */}
      </div>
    </Router>
   
    </div>
  );
}
}

export default App;
