import React, { Component } from "react";
import "./style.css";


class SignUp extends Component {
  state = {
    username: "",
    password: ""
  };
 
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };

  render() {
    return (

      <div className="container">
      <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
              <div className="card">
                  <div className="card-body">
                      <h2>Register An Account</h2>
                      <form onSubmit={this.handleSubmit}>
                          <div className="form-group">
                              <label>Username:</label>
                              <input 
                              name= "username"
                               type="text"
                               className="form-control" 
                               id="username" 
                               aria-describedby="username" 
                               placeholder="Enter Username"
                               value={this.state.username}
                               onChange={this.handleInputChange}
                               />
                          </div>
                          <div className="form-group">
                              <label>Password:</label>
                              <input 
                              name="password"
                              type="password" 
                              className="form-control" 
                              id="password" 
                              placeholder="Enter Password"
                              value={this.state.password}
                              onChange={this.handleInputChange}
                              />
                          </div>
                          <div className = 'd-inline'>
                              <button 
                                  type="submit" 
                                  className="btn btn-secondary btn-success register"
                                  >Register
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          <div className="col-md-3"></div>
      </div>
  </div>
  
    );
  };
};



export default SignUp;


