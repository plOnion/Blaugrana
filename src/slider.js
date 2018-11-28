import React from 'react';
import Carousel from 'react-image-carousel';
import slide1 from "./img/slide1.jpg";
import slide2 from "./img/slide2.jpg";
import slide3 from "./img/slide3.png";


class SimpleSlider extends React.Component {

    render() {
        let images = [
            slide1,
            slide2,
            slide3,
        ]

        return (
            <div className="my-carousel main_slider">
                <Carousel images={images}
                          thumb={true}
                          loop={true}
                          autoplay={3000}/>
            </div>
        )
    }
}

export default SimpleSlider;