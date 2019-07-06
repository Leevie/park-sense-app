import React, { Component } from "react";
import Nav from "../Nav";
import {Container} from "../Grid";
import Jumbotron from "../Jumbotron";
import "./style.css";
class ReviewForm extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    title: "",
    location: "",
    features: [{ name: "swings", isChecked: false }, { name: "slides", isChecked: false },
    { name: "monkey-bar", isChecked: false }, { name: "castle", isChecked: false }],
    description: "",
    image: null,
  };

  // fileChangedHandler = event => {
  //   this.setState({ image: event.target.files[0] })
  //   console.log(this.state.image)
  // }
  
  // uploadHandler = () => {
  //   axios.post('my-domain.com/file-upload', this.state.selectedFile)
  // }
  // handle any changes to the input fields
  handleInputChange = event => {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = event.target;
    const features = this.state.features;
    features.forEach(feature => {

      //console.log(feature.name + ':' + event.target.name)
      if (feature.name === event.target.name) {
        feature.isChecked = event.target.checked


      }
    })
    // Set the state for the appropriate input field
    this.setState({
      [name]: value,
      features: features,
    });
    console.log(this.state);
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`features: ${this.state.features.text}\ntitle: ${this.state.title}`);
    this.onDrop();
    this.setState({   
        title:"",
    location:"",
    features:[{ name: "swings", isChecked: false }, { name: "slides", isChecked: false },
    { name: "monkey-bar", isChecked: false }, { name: "castle", isChecked: false }],
    description:"",
    image:[]
 });
  };

  render() {
    return (
        <Container>
        <Nav/>
        <Jumbotron/>
      <form className="form-group mainBox">
        <br></br>
        <input
        className="form-control"
          type="text"
          placeholder="Title"
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
              className="form-check-input"
              id="customCheck1"
              name="swings"
              checked={this.state.features.isChecked}
              value={this.state.features.value}
              onClick={this.handleInputChange}
            />
            <label className="form-check-label" htmlFor="customCheck1">Swings</label>

            <input className="form-check-input"
              type="checkbox"
              id="inlineCheckbox2"
              name="slides"
              checked={this.state.features.isChecked}
              value={this.state.features.value}
              onClick={this.handleInputChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">Slides</label>

            <input className="form-check-input"
              type="checkbox"
              id="inlineCheckbox3"
              name="monkey-bar"
              checked={this.state.features.isChecked}
              value={this.state.features.value}
              onClick={this.handleInputChange} />
            <label className="form-check-label" htmlFor="inlineCheckbox3">Monkey Bar</label>

            <input className="form-check-input"
              type="checkbox"
              id="inlineCheckbox4"
              name="castle"
              value={this.state.features.value}
              onChange={this.handleInputChange}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox4"> Castle</label>
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
      <input type="file" onChange={this.fileChangedHandler}/>
<button onClick={this.uploadHandler}>Upload!</button>
<br></br>
<br></br>
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
      </Container>
    );
  }
}

export default ReviewForm;
