import React from "react";
import "./style.css";

// The Thumbnail component renders a div that uses some CSS to render a background image
// It will always keep square proportions at any size without the image warping
// The "role" and "aria label" are there to identify the element's purpose as an image for accessibility purposes
function Thumbnail({ 
  src,
  thumbnail = "https://www.exploregeorgia.org/sites/default/files/styles/slideshow_large/public/legacy_images/dunwoody-nature-center-playground-1474661724.jpg?itok=1ozVLkjN" })
{
  return (
    <div
      className="col-xs-4 md-2 thumbnail"
      role="img"
      aria-label="Park Image"
      style={{
        backgroundImage: `url(${thumbnail})`
      }}
    />
  )};
  export default Thumbnail;