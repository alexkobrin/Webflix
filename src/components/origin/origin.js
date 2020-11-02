import React, { useEffect ,useState } from 'react';
import Header from '../header/header';
import Carousel from './Carousel'
import './origin.scss';

function Origin() {

 const [newReleases , setNewReleases] = useState("");
 useEffect(() => {
       
       return () => {
         
       }
   }, [])
 return (
        <section className="origin">
            <div className="container-fluid">
             <Header/>
              </div>
            <div className="container">
                <div className="colection-title">
                  <h1> Collections of movies </h1>
                  <h2>Choose Your favourite film , and learn more about it</h2>
                  </div>

                  <div className="collection-slider__new">
                  <div className="collection-slider__title">
                      New Releases
                  </div>
                  <div className="collection-slider__inner">
                     <Carousel/> 
                  </div>
                  </div>
            </div>
          
        
           </section>
    )
}

export default Origin
