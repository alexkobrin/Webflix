import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Carousel from './Carousel'
import './origin.scss';

function Origin() {

    const [newReleases, setNewReleases] = useState("");
    useEffect(() => {

        return () => {

        }
    }, [])
    return (
        <section className="origin">
            <div className="container-fluid">
                <Header />
            </div>
            <div className="container">
                <div className="colection-title">
                    <h1> Collections of movies </h1>
                    <h3>Choose Your favourite film , click on it and learn more.</h3>
                </div>
                </div>
                <div className="container-fluid">
                <div className="collection-slider__trending">
                    <div className="collection-slider__inner">
                        <Carousel />
                    </div>
                </div>
                </div>
        </section>
    )
}

export default Origin
