import React from 'react'
 
 const  Button = (props) => (
            <button 
            className={props.className} 
            onClick={props.clicked}>
            {props.children}
            </button>
   );

export default   Button;
