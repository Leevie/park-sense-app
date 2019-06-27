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
            <li className="list-group-item">
            <Container>
                <Row>
                <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
          <p>{title}</p>
          <a rel="noreferrer noopener" target="_blank" href={href}>
              Link to the park page
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
