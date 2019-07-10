import React from "react";
import "./style.css";
import Nav from "../Nav";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";


class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/api/users/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }
    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div>
                    <Nav />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 style={{ fontWeight: 'bolder', fontSize: '60px' }}>Login</h2>
                                        <form >
                                            <div className="form-group">
                                                <label style={{ fontWeight: 'bolder' }}>Username:</label>
                                                <input
                                                    name="username"
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    placeholder="Enter Username"
                                                    value={this.state.username}
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label style={{ fontWeight: 'bolder' }}>Password:</label>
                                                <input
                                                    name="password"
                                                    type="password"
                                                    className="form-control"

                                                    id="password"
                                                    placeholder="Enter Password"
                                                    value={this.state.password}
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className='d-inline'>
                                                <button
                                                    type="button"
                                                    onClick={this.handleSubmit}
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
    }
};

export default Login;
