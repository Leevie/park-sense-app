import React, {Component} from "react";
import "./style.css"
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";

class PreviewTest extends Component {
  state = {
    parks: [],
    thumbnail: "",
    title: "",
    summary: "",
    href: "",
    appropriateAge: "",
    starRating: ""
  }



  componentDidMount() {
    this.loadParks();
  }

  loadParks = () => {
    API.getParks()
      .then(res =>
          this.setState({ parks: res.data, title: "", summary: "" })
        )
        .catch(err => console.log(err));
  }

  deletePark = id => {
    API.deletePark(id)
      .then(res => this.loadParks())
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.savePark({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadParks())
  //       .catch(err => console.log(err));
  //   }


  render() {
    return (
        <ul>
            <li className="list-group-item box1">
            <Container>
                <Row>
                <Col size="lg-4 lg-6">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="lg-4 lg-4">
          <p>{title}</p>
          <a rel="noreferrer noopener" target="_blank" href={href}>
             <h1 style={{ color: 'white'}}>Link to the park page</h1> 
            </a>
                <p>{summary}</p>
                <p>{appropriateAge}</p>
                <p>{starRating}</p>
          </Col>
                </Row>
            </Container>
                
            </li>
        </ul>

    );
}



}; //ENDS class PreviewTest



export default PreviewTest;
