import React from "react";
import NavBar from "../Nav";
import Jumbotron from "../Jumbotron";
import Preview from "../Preview/index";
import Footer from "../Footer";
import "./style.css";
import { Container } from "../Grid";


function Home(props) {
  console.log(`My Home Props: ${props}`);
  console.log(`My Home Props username: ${props.username}`);
  console.log(`My Home Props loggedIn: ${props.loggedIn}`);
  console.log(`My Home Props function: ${props.updateUser}`)
  return (
    <div>
      <NavBar username={props.username} loggedIn={props.loggedIn} updateUser={props.updateUser} />
      {/* <NavBar /> */}
      <Container>
        <Jumbotron />
        <Preview />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
