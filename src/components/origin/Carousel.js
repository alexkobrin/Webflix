import React, { Component } from "react";

import Slider from "react-slick";

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newRelease: [],
            Actions: []
        }
    }
    componentDidMount() {

    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div>
                <h2> Multiple items </h2>
                <Slider {...settings}>
                    {this.state.newRelease.map( film =>  (
                        <div className="film">
                            <img alt=""/>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}