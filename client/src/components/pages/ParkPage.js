import React from "react";
import NavBar from "../Nav";
import Jumbotron from "../Jumbotron";
import Review from "../Review";
import {Preview, PreviewItem} from "../Preview";
import Footer from "../Footer";
import "./style.css";


function ParkPage() {
  return (
    <div>
      <NavBar/>
     {/* <Jumbotron/> */}
    {/* <Review/> */}
    <Preview>

                      <PreviewItem
                        // key={recipe.title}
                        // title={recipe.title}
                        // href={recipe.href}
                        // ingredients={recipe.ingredients}
                        // thumbnail={recipe.thumbnail}
                      />
        
    </Preview>
    <Footer/>
    </div>
  );
}

export default ParkPage;
