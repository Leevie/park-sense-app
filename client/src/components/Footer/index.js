import React from "react";
import "./footer.css";

function Footer(){
    return (
      <footer className="footer mt-auto py-5"style={{border: 'double 20px gold'}}>
        <div className="container">
          <span className="text-muted">
            &copy; PARKIFY APP - All rights reserved.
          </span>
        </div>
      </footer>
    );
}

export default Footer;