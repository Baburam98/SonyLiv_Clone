import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class Originals extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts : [],
             errorMsg : ""
        }
    }

    componentDidMount(){
        axios.get("https://api.tvmaze.com/shows")
        .then(response =>{
            this.setState({posts:response.data})
        })
        .catch(error =>{
            this.setState({errorMsg:"Error Retreiving Data"})
        })
    }
    
    render() {
        const {posts,errorMsg} = this.state
        const settings = {
            arrows : true,
            infinite : false,
            slidesToShow : 7,
            slidesToScroll : 7,
            speed : 500,
            className: "slides",
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 4
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                  }
                },
              ]
        }

        return (
            <div>
                <Helmet>
                    <title>SonyLIV - Originals</title>
                </Helmet>
                <Link to = '/originalslist'><h3 id="head" style={{color:"white",marginLeft:"10px"}}>Most Watched Originals &gt;</h3></Link>
                
                <Slider {...settings}>
                {posts.map((post)=>{
                        return(
                            <div className="row__posters" key={post.id}>
                                <Link to={{pathname: "/details",state:{items:post}}}>
                                <img className="row__poster" width="100%" src={post.image.medium}/></Link>
                            </div>
                        )  
                    })}
                </Slider>  
            </div>
        )
    }
}

export default Originals
