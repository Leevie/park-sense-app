import React, { Component } from "react";
import NavBar from "../Nav";
import {Container} from "../Grid";
import Jumbotron from "../Jumbotron";
import "./style.css";

class ReviewForm extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
   title:"",
   location:"",
   features:[],
   description:"",
   image:[]
  };


  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`features: ${this.state.features.text}\ntitle: ${this.state.title}`);

    this.setState({   
        title:"",
    location:"",
    features:[],
    description:"",
    image:[]
 });
  };

  render() {
    return (
        // <Container>
        <div>
        <NavBar/>
        <br></br>
        <Jumbotron/>
        <br></br>
      <form className="form-group mainBox container-fluid">
        <br></br>
        <input
        className="form-control"
          type="text"
          placeholder="Name of Park"
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange}
        />
        <br></br>
        <input
        className="form-control"
          type="text"
          placeholder="Location"
          name="location"
          value={this.state.location}
          onChange={this.handleInputChange}
        />
     <div className="form-check form-check-inline">
  <input 
  type="checkbox" 
  className="control-label" 
  id="customCheck1"
  name="swings"
  value={this.state.features}
  onClickCapture={this.handleInputChange}
  />
  <label className="control-label" for="customCheck1" id="swingCheckBox" style={{color:'white', fontWeight:'bolder'}}>Swings</label>
{/* <br></br>
<br></br>
<br></br> */}
  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value={this.state.features}onClickCapture={this.handleInputChange}/>
  <label className="control-label" for="inlineCheckbox2" id="slideCheckBox"style={{color:'white', fontWeight:'bolder'}}>Slides</label>

  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value={this.state.features}onClickCapture={this.handleInputChange}/>
  <label className="control-label" for="inlineCheckbox3" id="monkeyCheckBox"style={{color:'white', fontWeight:'bolder'}}>Monkey Bar</label>

  <input className="form-check-input" type="checkbox" id="inlineCheckbox4" value={this.state.features}onClickCapture={this.handleInputChange}/>
  <label className="control-label" for="inlineCheckbox4" id="musicCheckBox"style={{color:'white', fontWeight:'bolder'}}> Music</label>
</div>
        <input
        className="form-control description"
        type="text"
        placeholder="Description"
        name="description"
        value={this.state.description}
        onChange={this.handleInputChange}
      />
      <br>
      </br>
      <p>Upload Images</p>
      <div className="custom-file uploadImages">
  <input type="file"
  className="custom-file-input" 
  id="customFile"
  placeholder="Please choose an image"
  name="file"
    value={this.state.image}
    onChange={this.handleInputChange}/>
  <label className="custom-file-label browseFile" for="customFile">Choose file</label>
</div>
<br></br>
<br></br>
        <button class="btn btn-dark submitBtn" onClick={this.handleFormSubmit}>Submit</button>
      </form>
      {/* // </Container> */}
      </div>
    );
  }
}

export default ReviewForm;
