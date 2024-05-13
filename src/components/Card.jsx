import React from "react";
import {Grid} from "@mui/material";
import TextComponent from "./TextComponent";
import ImageComponent from "./ImageComponent";

const Card = ()=>{
    return(
        <>
            <Grid item xs={6} >
                <div >
                    <TextComponent/>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div >
                    <ImageComponent/>
                </div>
            </Grid>
            </>
)
}

export default Card;