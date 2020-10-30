import React from 'react';
import './search.scss';
function search(props) {

   const  handleChangle = event => {
    event.preventDefault()
     //  let result = event.target.select    
    }
    return (
        <div className="container">
            <div className="form-container">
            <form className="search-box" action="">
            <label htmlFor="q"> 
               <input
              
               className="search-box__input"
               id="q"
               onChange ={ (event) => handleChangle(event)}
               type="text"
               placeholder=""
                
               />
               <label htmlFor="" className="placeLabel">Find movie</label>
               </label>
            </form>
            </div>
        </div>
    )
}

export default search
