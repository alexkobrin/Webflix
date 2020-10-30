import React from 'react';
import { Link} from 'react-router-dom'

function navItem() {
    return ( 
        <ul className="navigation">
       
         <Link className="navLink" to="/">Home</Link> 
         <Link className="navLink" to="/find">More Details</Link> 
         <Link className="navLink" to="/auth">Sign In</Link> 
        
      </ul>
    )
}

export default navItem
