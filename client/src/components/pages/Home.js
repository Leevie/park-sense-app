import React from "react";
import NavBar from "../Nav";
import Jumbotron from "../Jumbotron";
import Review from "../Review";
import Preview from "../Preview/index";
import Footer from "../Footer";
import "./style.css";


function Home() {
  return (
    <div>
    <NavBar/>
    <Jumbotron/>
    <Review/>
    <Preview/>
    <Footer/>
    </div>
  );
}

export default Home;
