import React from "react";
import Nav from "../Nav";
import Jumbotron from "../Jumbotron";
import Review from "../Review";
import Preview from "../Preview";

function Home() {
  return (
    <div>
      <Nav/>
     <Jumbotron/>
    <Review/>
    <Preview/>
    </div>
  );
}

export default Home;
