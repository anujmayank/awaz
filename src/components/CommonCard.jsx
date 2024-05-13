import React from "react";
import {Grid} from "@mui/material";
import TextComponent from "./TextComponent";
import ImageComponent from "./ImageComponent";

const CommonCard = ({cardData})=>{
    // reverse image and text component
    const reverseClass = cardData.reverse ? 'cardContainerReverse': 'cardContainer';

    return(
        <Grid container className={reverseClass}>
            <Grid item xs={6} className="cardContainer">
                <div >
                    <TextComponent cardData={cardData}/>
                </div>
            </Grid>
            <Grid item xs={6} >
                <div >
                    <ImageComponent/>
                </div>
            </Grid>
        </Grid>
    )
}

export default CommonCard;