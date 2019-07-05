import React from "react";
import "./style.css"

// Destructuring the type, className, children and onClick props, applying them to the button element
function Review({ type = "default", className,onClick }) {
  return (
      <div style={{marginRight:'2%'}}>
    <button onClick={onClick} className="btn btn-lg all button mr-5 btn-warning previewBtn">
        All ages 
    </button>
    <button onClick={onClick} className="btn btn-lg twoFour button mr-5 btn-warning previewBtn">
    Age 2-4  
    </button>
    <button onClick={onClick} className="btn btn-lg fiveSeven button mr-5 btn-warning previewBtn">
    Age 5-7  
    </button>
    <button onClick={onClick} className="btn btn-lg eightNine button mr-5 btn-warning previewBtn">
    Age 8-9  
    </button>
    <button onClick={onClick} className="btn btn-lg tenTwelwe button mr-5 btn-warning previewBtn">
    Age 10-12
    </button>
    <button onClick={onClick} className="btn btn-lg thirteen button mr-5 btn-warning previewBtn">
    Age 13+
    </button>
    </div>
  );
}

export default Review;