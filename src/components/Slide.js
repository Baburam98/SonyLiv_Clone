import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slideList from './SlideList';

class Slide extends Component {

    render() {
        const settings = {
            dots : true,
            arrows : true,
            infinite : true,
            speed : 500,
            slidesToShow : 1,
            slidesToScroll : 1,
            autoplay: true,
            autoplaySpeed: 3000,
            className: "slides",
        }
        return (
            <div>
                <Slider {...settings}>
                    {slideList.map((photo)=>{
                        return(
                            <div key={photo.id}>
                                <img width="100%" src={photo.url}/>
                            </div>
                        )  
                    })}
                </Slider>
            </div>
        )
    }
}

export default Slide
