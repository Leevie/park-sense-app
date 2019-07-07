import React from "react";
import "./style.css"

// Destructuring the type, className, children and onClick props, applying them to the button element
function Review({ type = "default", className,onClick }) {
  return (
    <div className="review-buttons btn-toolbar justify-content-between">
    <button onClick={onClick} className="btn btn-lg all button  btn-success">
        All ages 
    </button>
    <button onClick={onClick} className="btn btn-lg twoFour button  btn-success">
    Age 2-4  
    </button>
    <button onClick={onClick} className="btn btn-lg fiveSeven button  btn-success">
    Age 5-7  
    </button>
    <button onClick={onClick} className="btn btn-lg eightNine button  btn-success">
    Age 8-9  
    </button>
    <button onClick={onClick} className="btn btn-lg tenTwelwe button  btn-success">
    Age 10-12
    </button>
    <button onClick={onClick} className="btn btn-lg thirteen button  btn-success">
    Age 13+
    </button>
    </div>
  );
}

export default Review;