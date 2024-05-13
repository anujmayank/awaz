import React from 'react';
import placeholderImage from '../placeholderImage.png'

const ImageComponent = (props) => {
    return(
        <div>
            <img src={placeholderImage} alt="" className="cardImage"/>
        </div>
    )
}

export default ImageComponent;