import React, {Component} from "react";
import { Modal } from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./style.css";

class ParkDetails extends Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        show: false,
      };
  
      this.handleShow = () => {
        this.setState({ show: true });
      };
  
      this.handleHide = () => {
        this.setState({ show: false });
      };
    }
  
    render() {
        const {name, description, age, image ,children } = this.props
      return (
        <>
          <Link variant="primary" onClick={this.handleShow}>
            {name}
          </Link>
  
          <Modal 
            className="park-details"
            size="lg"
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="modal-xl"
            aria-labelledby="example-custom-modal-styling-title"
            backdrop="static"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {name}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="modal-image">
                <img src={image} alt=""/>
                </div>
                <br/>
                <p>
                <strong>Park Description: </strong>{description}
                <br/>
                <strong>Recommended Age:  </strong> {age}
              </p>
                <strong>Park Features:</strong>
                <br/>
                 *features here*
              <p>
                  
              </p>
            </Modal.Body>
          </Modal>
        </>
      );
    }
  }
  
//   render(<ParkDetails />);
export default ParkDetails;