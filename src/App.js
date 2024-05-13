import './App.css';
import Card from "./components/Card";
import CommonCard from "./components/CommonCard";
import {Grid} from "@mui/material";
import CardCarousel from "./components/Carousel";
import React from "react";

//List of card data that can be fetched from API
const cardsData = [{
        header: "Get Conversational video in 5 minutes",
        list: ["No more thinking of content", "Choose List of questions", "Create your own questions"],
        subtitle:"Create your video resume now",
        reverse: false
},{
    header: "Get Conversational video in 5 minutes",
    list: ["No more thinking of content", "Choose List of questions", "Create your own questions"],
    subtitle:"Create your video resume now",
    // based on reversed text and image container swtiches position
    reverse: true}]

function App() {
  return (
      <div className="App">
          <Grid container spacing={2} className="item container">
              {/*top card*/}
              <Card/>
              {cardsData.map((cardData, index) => {
                  return (
                      //common card for list of tiles
                      <CommonCard cardData={cardData} key={index}/>
                  )
              })}
              <Grid item xs={6} >
                  <div >
                      <div className="crouselText">Trusted by Job Seekers</div>
                      {/*croused component*/}
                      <CardCarousel/>
                  </div>
              </Grid>
              <Grid item xs={6}>
                  <div >
                      Carousel Text
                  </div>
              </Grid>

          </Grid>
          {/*footer*/}
          <footer className="footer">
              <ul>
                  <li><a href="">Product</a></li>
                  <li><a href="">Resource</a></li>
                  <li><a href="">About</a></li>
              </ul>
          </footer>
      </div>
  );
}

export default App;
