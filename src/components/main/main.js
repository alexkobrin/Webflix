import React from 'react';
import Header from '../header/header';
import './main.scss';

function main() {
  return (
    <header className="header">
     <Header/>
      <div className="container">
        <div className="main-container">
          <div className="main-title">
            <h1 className="main-h1">All films in the entire world</h1>
            <h2 className="main-h2">50% off your first 5 mounths</h2>
            <h3 className="main-h3">Watch everywhere. Cansel anytime</h3>
          </div>
          <div className="main-form">
            <form action="" method="GET">
              <div className="email-form__inner">
                <div className="email-form__input">
                  <label className="main-label" for="main-input" placeholder="email">
                  <input id="main-input" className="main-input"  type="email"   minLength="5" maxLength="40" />
               <label className="placeLabel">Email adress</label>
               </label>
                </div>
                <div className="email-form__button">
                  <button className="main-button">
                    <span>TRY FOR 50% OFF</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <h3 className="main-h3"> Only new member gets discount</h3>
        </div>
      </div>

    </header>


  )
}

export default main
