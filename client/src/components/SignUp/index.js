import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./style.css";
import Nav from "../Nav";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }
 
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUser = {
      username: this.state.name,
      password: this.state.password,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
<div>
          <Nav/>
      <div className="container">
      <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-12">
              <div className="card">
                  <div className="card-body">
                      <h2 style={{fontWeight:'bolder', fontSize:'60px'}}>Register An Account</h2>
                      <form noValidate onSubmit={this.onSubmit}>
                          <div className="form-group">
                              <label style = {{fontWeight:'bolder'}}>Username:</label>
                              <input 
                              name= "username"
                               type="text"
                               className={classnames("form-control", {
                                invalid: errors.username
                              })}
                               error={errors.username}
                               id="username" 
                               aria-describedby="username" 
                               placeholder="Enter Username"
                               value={this.state.username}
                               onChange={this.onChange}
                               />
                          </div>
                          <div className="form-group">
                              <label style={{fontWeight:'bolder'}}>Password:</label>
                              <input 
                              name="password"
                              type="password" 
                              id="password" 
                              placeholder="Enter Password"
                              value={this.state.password}
                              className={classnames("form-control", {
                                invalid: errors.password
                              })}
                              onChange={this.onChange}
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
</div>
  
    );
  };
};

SignUp.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(SignUp));



