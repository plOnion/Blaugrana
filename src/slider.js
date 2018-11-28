import React from "react";
import Slider from "react-slick";
import slide1 from "./img/slide1.jpg";
import slide2 from "./img/slide2.jpg";
import slide3 from "./img/slide3.png";

class SimpleSlider extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            accessibility: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: 1,
            arrows: 0,
        };
        return (
            <Slider {...settings}>
                <div>
                    <img src={slide1} alt={"slide1"}/>
                </div>
                <div>
                    <img src={slide2} alt={"slide1"}/>
                </div>
                <div>
                    <img src={slide3} alt={"slide1"}/>
                </div>
            </Slider>
        );
    }
}

export default SimpleSlider;