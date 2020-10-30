import React from 'react';
import Tv from '../../assets/img/tv.png';
import Trailer from '../../assets/video/trailer1.mp4';
import Trailer2 from '../../assets/video/trailer2.mp4';
import './enjoy.scss'
import Phone from '../../assets/img/phone-fin.jpg'
import TvImage from '../../assets/img/tv-image.png'
function enjoy() {
    return (
        <section className="enjoy">
            <div className="enjoy__bg"></div>
            <div className="container">
                <div className="enjoy__inner">
                    <div className="enjoy__text">
                        <h1 className="enjoy__h1"> Enjoy on your TV</h1>
                        <div className="enjoy__h3"> Watch your movies on TV , Blu-ray players, and more</div>
                    </div>
                    <div className="enjoy__image">
                            <img src={Tv} alt="" />                        
                        <div className="enjoy__video">
                            <video className="enjoy__video-card" muted="true" loop="true" autoplay="false">
                                <source src={Trailer} type="video/mp4" />
                            </video>

                        </div>
                    </div>
                </div>
            </div>
            <div className="enjoy__bg"></div>
            <div className="container">
                <div className="download">
                    <div className="download__inner">
                    <div className="download__video">
                        <div className="idownload__image">
                            <img src={Phone} alt=""/>
                        </div>  
                    </div>
                    <div className="download__text">
                        <div className="download__h1">
                        Download your shows to watch offline
                        </div>
                        <div className="download__h2">
                        Save your favorites easily and always have something to watch.
                        </div>
                    </div>
                    </div>

                </div>
            </div>
            <div className="enjoy__bg"></div>
            <div className="container">
            <div className="enjoy__inner">
                    <div className="enjoy__text">
                        <h1 className="enjoy__h1">Watch everywhere</h1>
                        <div className="enjoy__h3">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</div>
                    </div>
                    <div className="enjoy__image">
                            <img src={TvImage} alt="" />                        
                        <div className="enjoy__video2">
                            <video className="enjoy__video-card" muted="true" loop="true" autoplay="false">
                                <source src={Trailer2} type="video/mp4" />
                            </video>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default enjoy
