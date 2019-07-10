import React, {Component} from "react";
import "./style.css"
import API from "../../utils/API";
import {List, ListItem} from "../List";
import ParkDetails from "../Modal";
import { Button } from 'react-bootstrap';
import Review from "../Review";


let dImage = "https://via.placeholder.com/150"

class Preview extends Component {
  state = {
    parks: [],
    thumbnail: "",
    title: "",
    summary: "",
    href: "",
    appropriateAge: [],
    starRating: ""
  }



  componentDidMount() {
    this.loadParks();
  }

  filterBtn = (appropriateAge) => {
    this.setState({appropriateAge})
  }


  loadParks = () => {
    API.getParks()
      .then(res =>
          this.setState({ parks: res.data})
          // console.log(res.data)
        )
        .catch(err => console.log(err));
  }
  

  deletePark = id => {
    API.deletePark(id)
      .then(res => this.loadParks())
      .catch(err => console.log(err));
  };


  render() {
    return (
        <div>
        <Review btnClick={this.filterBtn}/>
        <div className= "preview-item">
        {this.state.parks.length ? (
          <List>
            {this.state.parks.filter(park => 
             // "if false within range, return true.  if not, return false, default is true"
               this.state.appropriateAge.length === 0 ? true : park.age >= this.state.appropriateAge[0] && park.age <= this.state.appropriateAge[1]
            ).map(park => (
              <ListItem key={park._id}>
                <div className="clearfix img-holder">
                <img src={park.image === "" ? dImage : park.image} alt=""/>
                </div>
                <span className="preview-span">
                      <ParkDetails 
                        name={park.parkName}
                        image={park.image === "" ? dImage : park.image}
                        description={park.description}
                        age={park.age}
                       />

                      <br/>
                        {park.description}
                      <br/>
                      <strong>Recommended Age:  </strong> {park.age}
                  </span>

                {/* <DeleteBtn onClick={() => this.deletePark(park._id)} /> */}
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )}
        </div>
        </div>





    );
}



}; //ENDS class PreviewTest



export default Preview;
