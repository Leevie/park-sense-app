import React from "react";
import axios from "axios";
// import "./Login.css";
// import {Animated} from "react-animated-css";
import "./style.css";
import Nav from "../Nav";


class Login extends React.Component {


    state = {
        username: "",
        password: ""
    };

    handleInputChange = (event) => {
                this.setState({
            [event.target.name]: event.target.value
        })
    }


   handleSubmit = (event) => {
        event.preventDefault();
        const {username, password} = this.state;

        const userSignUp = {
            username,
            password
        };

        axios.post("/db/newuser", userSignUp)
            .then((response)=>{
                console.log("user#: " + response._id)
            }).catch((error) => {
                throw error
            })
   }

   onSignIn (event){
        event.preventDefault();
        console.log('Sign in attempted...')
        axios.get("/db/finduser/" + this.state.username + "/" + this.state.password)
            .then((response) => {
                if (response.data.ans === true){
                    console.log('Signing in!')
                    this.props.authorize(response.data.data);
                } else {
                    alert('Sorry, nothing found. Try again, or create an account!')
                    this.setState({
                        username: "",
                        password: ""
                    });
                }

            }).catch((error) => {
                throw error;
            })
   }

    render() {

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
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label style={{fontWeight:'bolder'}}>Username:</label>
                                        <input 
                                        name= "username"
                                         type="text"
                                         className="form-control" 
                                         id="username" 
                                         aria-describedby="username" 
                                         placeholder="Enter Username"
                                         value={username}
                                         onChange={this.handleInputChange}
                                         />
                                    </div>
                                    <div className="form-group">
                                        <label style={{fontWeight:'bolder'}}>Password:</label>
                                        <input 
                                        name="password"
                                        type="password" 
                                        className="form-control" 
                                        id="password" 
                                        placeholder="Enter Password"
                                        value={password}
                                        onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className = 'd-inline'>
                                        <button 
                                            type="button" 
                                            className="btn btn-secondary btn-success mr-5 signIn"
                                            onClick={(event)=>this.onSignIn(event)}
                                            >Sign In
                                        </button>
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

export default Login;