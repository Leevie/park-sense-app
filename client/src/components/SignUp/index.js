import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";
import Nav from "../Nav";
import axios from "axios";


class SignUp extends Component {
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
        console.log('sign-up handleSubmit, username: ')
        console.log(this.state.username)
        event.preventDefault()

        //request to server to add a new username/password
        axios.post('/api/users/', {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('successful signup')
                    this.setState({ //redirect to login page
                        redirectTo: '/'
                    })
                } else {
                    console.log('username already taken')
                }
            }).catch(error => {
                console.log('signup error: ')
                console.log(error)

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.setState.redirectTo }} />
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
                                        <h2 style={{ fontWeight: 'bolder', fontSize: '60px' }}>Register An Account</h2>
                                        <form>
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
                                                    id="password"
                                                    placeholder="Enter Password"
                                                    value={this.state.password}
                                                    className="form-control"
                                                    onChange={this.handleChange}
                                                />
                                            </div>
                                            <div className='d-inline'>
                                                <button
                                                    type="submit"
                                                    onClick={this.handleSubmit}
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
        }
    };
};

export default SignUp;
