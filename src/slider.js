import React from 'react';
import Carousel from 'react-image-carousel';

class SimpleSlider extends React.Component {

    render() {
        let images = [
            './img/slide1.jpg',
            './img/slide2.jpg',
            './img/slide3.png',
        ]

        return (
            <div className="my-carousel">
                <Carousel images={images}
                          thumb={true}
                          loop={true}
                          autoplay={3000}/>
            </div>
        )
    }
}

export default SimpleSlider;