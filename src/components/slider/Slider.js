import React from 'react';
import Header from '../header/header';
import Carousel from './Carousel'
import { useHistory} from "react-router-dom";

import './slider.scss';

function Slider(props) {

    let history = useHistory();
    const clickHandler = (id) => {
        localStorage.setItem("movieId", id)
         history.push("/find")
    }

    return (
        <section className="origin">
            <Header />
            <div className="container">
                <div className="colection-title">
                    <h1> Collections of movies </h1>
                    <h3>Choose Your favourite film , click on it and learn more.</h3>
                </div>
            </div>
            <div className="container-fluid">
                <div className="collection-slider__trending">
                    <div className="collection-slider__inner">
                        <Carousel clicked={clickHandler} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slider
