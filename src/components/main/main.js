import React from 'react';
import Header from '../header/header';
import { useHistory } from "react-router-dom";
import './main.scss';


function Main() {

  let history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault()
    history.push("/auth")
  }

  const inputChangeHandler = (event) => {
    const inputValue = event.target.value
    localStorage.setItem("email", inputValue)

  }

  return (
    <header className="header">
      <Header />
      <div className="container">
        <div className="main-container">
          <div className="main-title">
            <h1 className="main-h1">All films in the entire world</h1>
            <h2 className="main-h2">50% off your first 5 mounths</h2>
            <h3 className="main-h3">Watch everywhere. Cancel anytime</h3>
          </div>
          <div className="main-form">
            <form onSubmit={submitHandler} method="GET">
              <div className="email-form__inner">
                <div className="email-form__input">
                  <label className="main-label" htmlFor="main-input" placeholder="email">
                    <input id="main-input" onChange={inputChangeHandler} className="main-input" type="email" minLength="5" maxLength="40" />
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

export default Main
