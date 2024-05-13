import React from "react";
import Carousel from "react-material-ui-carousel";

// details can be fetched from API
const items = [
    {detail: "Item 1"},
    {detail: "Item 2"},
    {detail: "Item 3"}
];

const CardCarousel = ()=> {

    const [index, setIndex] = React.useState(0);

    const handleChange = (cur, prev) => {
        setIndex(cur);
    };

    return (
        <div>
            <Carousel
                index={index}
                onChange={handleChange}
                interval={4000}
                animation="slide"
                indicators={false}
                stopAutoPlayOnHover
                swipe
                className="myCarousel"
            >
                {items.map((item, i) => (
                    <div key={i} style={{width: "100%", height: "100%"}}>{item.detail}</div>

                ))}
            </Carousel>
            {items.map((item, i) => (
                <button
                    onClick={() => setIndex(i)}
                >
                    <span>.</span>
                </button>
            ))}
        </div>
    );
}

export default CardCarousel;
