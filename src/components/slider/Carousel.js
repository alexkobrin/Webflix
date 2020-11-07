import React, { Component } from "react";
import axios from "axios"
import Slider from "react-slick";

import './carousel.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trending: [],
            popular: [],
            tvShow: [],
            movieId: ""

        }
    }
    componentDidMount() {
        axios.get("https:api.themoviedb.org/3/movie/upcoming?api_key=24cfed25ea68b234c8167f71ba903910&language=en-US&page=1")
            .then(response => {
                this.setState({
                    trending: response.data.results
                })
            })

        axios.get("https:api.themoviedb.org/3/movie/popular?api_key=24cfed25ea68b234c8167f71ba903910&language=en-US")
            .then(response => {
                this.setState({
                    popular: response.data.results
                })
            })

        axios.get("https:api.themoviedb.org/3/discover/tv?api_key=24cfed25ea68b234c8167f71ba903910&language=en-US&page=1")
            .then(response => {
                this.setState({
                    tvShow: response.data.results
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

                    }
                },
                {
                    breakpoint: 850,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,

                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,

                    }
                },
                {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,

                    }
                }
            ]
        };
        return (
            <div>
                <h2 className="carousel-suptitle">Top upcoming movies in theatres</h2>
                <Slider {...settings}>
                    {this.state.trending.map((film, index) => (
                        <div className="carousel-item" key="index">

                            <img onClick={this.props.clicked.bind(this, film.id)} src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt="" />
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
                            <img onClick={this.props.clicked.bind(this, wer.id)} src={`https://image.tmdb.org/t/p/w500/${wer.poster_path}`} alt="" />
                            <div className="rating">
                                <div className="percent">
                                    <span>{`${wer.vote_average * 10}`}</span>
                                    <span className="percent-icon">%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <h2 className="carousel-suptitle">Popular TV Show</h2>
                <Slider {...settings}>
                    {this.state.tvShow.map((rew, index) => (
                        <div className="carousel-item" key="index">
                            <img onClick={this.props.clicked.bind(this, rew.id)} src={`https://image.tmdb.org/t/p/w500/${rew.poster_path}`} alt="" />
                            <div className="rating">
                                <div className="percent">
                                    <span>{`${rew.vote_average * 10}`}</span>
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