import React, { Component } from "react";
import Nav from "../Nav";
import { Container } from "../Grid";
import Jumbotron from "../Jumbotron";
import API from "../../utils/API";
import "./style.css";
class ParkSubmit extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    parkName: "",
    description: "",
    location: "",
    age: 0,
    image: "",
    features: [{ name: "swings", isChecked: false }, { name: "slides", isChecked: false },
      { name: "monkey-bar", isChecked: false }, { name: "castle", isChecked: false }],
    reviews: []
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
    });
    // Set the state for the appropriate input field
    this.setState({
      [name]: value,
      features: features,
    });
    console.log("MY NEW STATE", this.state);
  };

  // When the form is submitted, prevent the default event and alert the username and password
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    API.savePark(this.state);
    //this.onDrop();
    this.setState({
      parkName: "",
      description: "",
      location: "",
      age: 0,
      image: "",
      features: [{ name: "swings", isChecked: false }, { name: "slides", isChecked: false },
      { name: "monkey-bar", isChecked: false }, { name: "castle", isChecked: false }]
    });
  };

  render() {
    return (
      <div>
      <Nav />
      <Container>
        <Jumbotron />
        <form className="form-group mainBox">
          <br></br>
          <input
            className="form-control"
            type="text"
            placeholder="Park Name"
            name="parkName"
            value={this.state.parkName}
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
          <br></br>
          <input
            className="form-control description"
            type="number"
            placeholder="Age"
            name="age"
            value={this.state.age}
            onChange={this.handleInputChange}
          />
          <br></br>
          <br></br>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </Container>
      </div>
    );
  }
}

export default ParkSubmit;
