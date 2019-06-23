import React from "react";
import "./style.css"

// Destructuring the type, className, children and onClick props, applying them to the button element
function Review({ type = "default", className, children, onClick }) {
  return (
      <div> Review parks by age
    <button onClick={onClick} className="btn btn-lg">
        All ages 
    </button>
    <button onClick={onClick} className="btn btn-lg">
    Age 2-4  
    </button>
    <button onClick={onClick} className="btn btn-lg">
    Age 5-7  
    </button>
    <button onClick={onClick} className="btn btn-lg">
    Age 8-9  
    </button>
    <button onClick={onClick} className="btn btn-lg">
    Age 10-12
    </button>
    <button onClick={onClick} className="btn btn-lg">
    Age 13+
    </button>
    </div>
  );
}

export default Review;