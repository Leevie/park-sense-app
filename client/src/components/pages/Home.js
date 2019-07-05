import React from "react";
import NavBar from "../Nav";
import Jumbotron from "../Jumbotron";
import Review from "../Review";
import {Preview, PreviewItem} from "../Preview";
import Footer from "../Footer";
import "./style.css";



function Home() {
  return (
    <div>
      <NavBar/>
      <br></br>
    
     <Jumbotron/>
     <br></br>
    <Review/>
    {/* <br></br> */}
    <Preview>

                      <PreviewItem
                        // key={recipe.title}
                        // title={recipe.title}
                        // href={recipe.href}
                        // ingredients={recipe.ingredients}
                        // thumbnail={recipe.thumbnail}
                      />
        
    </Preview>
   {/* <br></br> */}
    
    <Footer/>
    </div>
  );
}

export default Home;
