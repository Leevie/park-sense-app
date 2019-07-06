import React, {Component} from "react";
import "./style.css"
// import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import API from "../../utils/API";
import {List, ListItem} from "../List";
import {Link} from "react-router-dom";

let dImage = "https://via.placeholder.com/150"

class Preview extends Component {
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
          this.setState({ parks: res.data, title: "TITLE", summary: "SUMMARY", appropriateAge: "AGE", href: "link"})
          // console.log(res.data)
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
        // <ul>
        //     <li className="list-group-item box1">
        //     <Container>
        //         <Row>
        //         <Col size="lg-4 lg-6">
        //     <Thumbnail src={thumbnail} />
        //   </Col>
        //   <Col size="lg-4 lg-4">
        //   <p>{this.state.title}</p>
        //   <a rel="noreferrer noopener" target="_blank" href={this.state.href}>
        //      <h1 style={{ color: 'white'}}>Link to the park page</h1> 
        //     </a>
        //         <p>{this.state.summary}</p>
        //         <p>{this.state.appropriateAge}</p>
        //         <p>{starRating}</p>
        //   </Col>
        //         </Row>
        //     </Container>
                
        //     </li>
        // </ul>
        <div className= "preview-item">
        {this.state.parks.length ? (
          <List>
            {this.state.parks.map(park => (
              <ListItem key={park._id}>
                <div className="clearfix img-holder">
                <img src={dImage}/>
                </div>
                <span className="preview-span">
                    <Link to={"/parks/" + park._id}>
                      <strong>
                        {park.parkName} 
                      </strong>
                    </Link>
                      <br/>
                        {park.description}
                  </span>
                {/* <DeleteBtn onClick={() => this.deletePark(park._id)} /> */}
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
        </div>





    );
}



}; //ENDS class PreviewTest



export default Preview;
