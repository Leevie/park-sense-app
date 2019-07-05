import React from "react";
import "./style.css"
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";


export function Preview({ children }) {
    return <ul className="list-group">{children}</ul>;
  }

  export function PreviewItem({
    thumbnail = "https://placehold.it/300x300",
    title,
    summary,
    href,
    appropriateAge,
    starRating

  }) {
    return (
        <ul>
            <li className="list-group-item container-fluid box1">
            <Container>
                <Row>
                <Col size="lg-4 lg-6">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="lg-4 lg-6">
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
export default Preview;
