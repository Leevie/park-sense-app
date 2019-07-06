import React from "react";
import axios from "axios";
// import "./Login.css";
// import {Animated} from "react-animated-css";
import "./style.css";
import Nav from "../Nav";
import { Link} from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";


class Login extends React.Component {


    state = {
        username: "",
        password: "",
        errors:{}
    };

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }
    
      componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
    
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
    
        const userData = {
          username: this.state.username,
          password: this.state.password
        };
    
        this.props.loginUser(userData);
      };

    render() {
        const { errors } = this.state;
        const {username, password} = this.state

        return (
        <div>
          <Nav/>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h2 style={{fontWeight:'bolder', fontSize:'60px'}}>Login</h2>
                                <form noValidate onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label style={{fontWeight:'bolder'}}>Username:</label>
                                        <input 
                                        name= "username"
                                         type="text"
                                         className="form-control" 
                                         id="username"
                                         error={errors.isername} 
                                         aria-describedby="username" 
                                         placeholder="Enter Username"
                                         value={username}
                                         onChange={this.onChange}
                                         />
                                    </div>
                                    <div className="form-group">
                                        <label style={{fontWeight:'bolder'}}>Password:</label>
                                        <input 
                                        name="password"
                                        type="password" 
                                        className="form-control" 
                                        error={errors.password}
                                        id="password" 
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={this.onChange}
                                        />
                                    </div>
                                    <div className = 'd-inline'>
                                        <button 
                                            type="button" 
                                            className="btn btn-secondary btn-success mr-5 signIn"
                                            >Sign In
                                        </button>
                                        <Link to="/signup" role="button" className="btn btn-secondary btn-success register">
                                               Register
                                            </Link>
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
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);

