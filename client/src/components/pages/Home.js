import React from "react";
import NavBar from "../Nav";
import Jumbotron from "../Jumbotron";
import Review from "../Review";
import Preview from "../Preview/index";
import Footer from "../Footer";
import "./style.css";
import { Container } from "../Grid";


function Home() {
  return (
    <div>
    <NavBar/>
    <Container>
    <Jumbotron/>
    {/* <Review/> */}
    <Preview/>
    </Container>
    <Footer/>
    </div>
    
  );
}

export default Home;
