import React, { Component } from "react";
import Nav from "../Nav";
import {Container} from "../Grid";
import Jumbotron from "../Jumbotron";

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
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const features=this.state.features;
    let index;
    if(event.target.checked){
        features.push(event.target.value)
    }else {
        index=features.indexOf(event.target.value)
        features.splice(index, 1)
    }
    // Set the state for the appropriate input field
    this.setState({
      [name]: value,
      features: features
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`features: ${this.state.name & this.state.isChecked}\ntitle: ${this.state.title}`);
    console.log(this.state.features);
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
        <Container>
        <Nav/>
        <Jumbotron/>
      <form className="form-group">
        <input
        className="form-control"
          type="text"
          placeholder="title"
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange}
        />
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
  className="custom-control-input" 
  id="customCheck1"
  name="swings"
  value={this.state.features}
  onChange={this.handleInputChange}
  />
  <label className="custom-control-label" htmlFor="customCheck1">Swings</label>

  <input className="form-check-input" 
  type="checkbox" 
  id="inlineCheckbox2" 
  name="slides"
  value={this.state.features}
 onChange={this.handleInputChange}/>
  <label className="form-check-label" htmlFor="inlineCheckbox2">Slides</label>

  <input className="form-check-input" 
  type="checkbox" 
  id="inlineCheckbox3" 
  name="monkey-bar"
  value={this.state.features}
  onChange={this.handleInputChange}/>
  <label className="form-check-label" htmlFor="inlineCheckbox3">Monkey Bar</label>

  <input className="form-check-input"
   type="checkbox"
    id="inlineCheckbox4"
    name="castle"
    value={this.state.features}
    onChange={this.handleInputChange}
    />
  <label className="form-check-label" htmlFor="inlineCheckbox4"> Castle</label>
</div>
        <input
        className="form-control"
        type="text"
        placeholder="Description"
        name="description"
        value={this.state.description}
        onChange={this.handleInputChange}
      />
      <p>Upload Images</p>
      <div className="custom-file">
  <input type="file"
  className="custom-file-input" 
  id="customFile"
  placeholder="Please choose an image"
  name="file"
    value={this.state.image}
    onChange={this.handleInputChange}/>
  <label className="custom-file-label" htmlFor="customFile">Choose file</label>
</div>
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
      </Container>
    );
  }
}

export default ReviewForm;

import React, { Component } from "react";
import Nav from "../Nav";
import {Container} from "../Grid";
import Jumbotron from "../Jumbotron";

class ReviewForm extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
   title:"",
   location:"",
   features:[  {name:"swings",isChecked:false},{name:"slides",isChecked:false},
  {name:"monkey-bar",isChecked:false},{name:"castle",isChecked:false}],
   description:"",
   image:[]
  };


  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // Set the state for the appropriate input field
    this.setState({[]
      [name]: value,
      isChecked:true
    });
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`features: ${this.state.name & this.state.isChecked}\ntitle: ${this.state.title}`);
    console.log(this.state.features);
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
        <Container>
        <Nav/>
        <Jumbotron/>
      <form className="form-group">
        <input
        className="form-control"
          type="text"
          placeholder="title"
          name="title"
          value={this.state.title}
          onChange={this.handleInputChange}
        />
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
  className="custom-control-input" 
  id="customCheck1"
  name="swings"
  value={this.state.features.isChecked}
  onClickCapture={this.handleInputChange}
  />
  <label className="custom-control-label" htmlFor="customCheck1">Swings</label>

  <input className="form-check-input" 
  type="checkbox" 
  id="inlineCheckbox2" 
  name="slides"
  value={this.state.features.isChecked}
  onClickCapture={this.handleInputChange}/>
  <label className="form-check-label" htmlFor="inlineCheckbox2">Slides</label>

  <input className="form-check-input" 
  type="checkbox" 
  id="inlineCheckbox3" 
  name="monkey-bar"
  value={this.state.isChecked}
  onChange={this.handleInputChange}/>
  <label className="form-check-label" htmlFor="inlineCheckbox3">Monkey Bar</label>

  <input className="form-check-input"
   type="checkbox"
    id="inlineCheckbox4"
    name="castle"
    value={this.state.isChecked}/>
  <label className="form-check-label" htmlFor="inlineCheckbox4"> Castle</label>
</div>
        <input
        className="form-control"
        type="text"
        placeholder="Description"
        name="description"
        value={this.state.description}
        onChange={this.handleInputChange}
      />
      <p>Upload Images</p>
      <div className="custom-file">
  <input type="file"
  className="custom-file-input" 
  id="customFile"
  placeholder="Please choose an image"
  name="file"
    value={this.state.image}
    onChange={this.handleInputChange}/>
  <label className="custom-file-label" htmlFor="customFile">Choose file</label>
</div>
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
      </Container>
    );
  }
}

export default ReviewForm;
