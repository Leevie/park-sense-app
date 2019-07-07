import React from "react";
import "./style.css"

// Destructuring the type, className, children and onClick props, applying them to the button element
function Review({ type = "default", className,onClick }) {
  return (
      <div style={{marginRight:'2%'}}>
    <button onClick={onClick} className="btn btn-lg all button mr-3 btn-warning"style={{border:'double 12px gold'}}>
        All ages 
    </button>
    <button onClick={onClick} className="btn btn-lg twoFour button mr-3 btn-warning" style={{border:'double 12px gold'}}>
    Age 2-4  
    </button>
    <button onClick={onClick} className="btn btn-lg fiveSeven button mr-3 btn-warning" style={{border:'double 12px gold'}}>
    Age 5-7  
    </button>
    <button onClick={onClick} className="btn btn-lg eightNine button mr-3 btn-warning" style={{border:'double 12px gold'}}>
    Age 8-9  
    </button>
    <button onClick={onClick} className="btn btn-lg tenTwelwe button mr-3 btn-warning" style={{border:'double 12px gold'}}>
    Age 10-12
    </button>
    <button onClick={onClick} className="btn btn-lg thirteen button mr-3 btn-warning" style={{border:'double 12px gold'}}>
    Age 13+
    </button>
    </div>
  );
}

export default Review;