import React from "react";
import NavBar from "../Nav";
import Jumbotron from "../Jumbotron";
import Review from "../Review";
import PreviewTest from "../Preview/index";
import Footer from "../Footer";
import "./style.css";
// import NavBar from "../Nav";


function Home() {
  return (
    <div>
      <NavBar/>
     <Jumbotron/>
    <Review/>
    <PreviewTest/>
    <Footer/>
    </div>
  );
}

export default Home;
