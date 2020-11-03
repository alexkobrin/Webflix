import React, { Component } from "react";
import axios from "axios"
import './carousel.scss';
import Slider from "react-slick";

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trending: [],
            popular: [],

            movieId: ""

        }
    }


    componentDidMount() {
        axios.get("https:api.themoviedb.org/3/discover/movie?api_key=24cfed25ea68b234c8167f71ba903910&sort_by=popularity.desc&primary_release_year=2020")
            .then(response => {
                this.setState({
                    trending: response.data.results

                })
                console.log(response.data.results
                )
            })

        axios.get("https:api.themoviedb.org/3/movie/popular?api_key=24cfed25ea68b234c8167f71ba903910&language=en-US")
            .then(response => {
                this.setState({
                    popular: response.data.results
                })
            })




    }



    render() {


        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoPlay: true,
            centerPadding: true,
            slidesToShow: 6,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                }
            ]
        };
        return (
            <div>
                <h2 className="carousel-suptitle"   >Trending</h2>
                <Slider {...settings}>
                    {this.state.trending.map((film, index) => (
                        <div className="carousel-item" key="index">
                            <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="" />
                            <div className="rating">
                                <div className="percent">
                                    <span>{`${film.vote_average * 10}`}</span>
                                    <span className="percent-icon">%</span>
                                </div>

                            </div>
                        </div>
                    ))}
                </Slider>
                <h2 className="carousel-suptitle">Now Popular</h2>
                <Slider {...settings}>

                    {this.state.popular.map((wer, index) => (
                        <div className="carousel-item" key="index">
                            <img src={`https://image.tmdb.org/t/p/w500/${wer.poster_path}`} alt="" />
                            <div className="rating">
                                <div className="percent">
                                    <span>{`${wer.vote_average * 10}`}</span>
                                    <span className="percent-icon">%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}