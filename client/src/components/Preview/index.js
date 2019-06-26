import React from "react";
import "./style.css"

function Preview(props) {
    return (
        <ul>
            <li>
                {/* <img src="" alt="park">Picture of the park</img> */}
                <p>Name of the park</p>
                <a
                    className="App-link"
                    href="/:id"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Link to the park page
        </a>
                <p>Brief description of parks</p>
                <p>Appropriate Age</p>
                <p>Star Rating</p>
            </li>
        </ul>

    );
}
export default Preview;
