import React from 'react';
import './search.scss';
function search(props) {

    const handleChangle = event => {

        if(event !== undefined) {
                     let querry = ''
       return  querry = event.target.value
        }
      
        
    }
    return (
        <div className="container">
            <div className="form-container">
                <form className="search-box" action="">
                    <label htmlFor="q">
                        <input

                            className="search-box__input"
                            id="q"
                           onclick={handleChangle}
                           // onChange={handleChangle.bind(this)}
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
