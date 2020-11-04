import React from 'react';

const input = (props) => {
    let inputElement = [];
    const inputClasses = inputElement;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                type={props.type}
                {...props.elementConfig}
                onChange={props.changed}
                placeholder={props.placeholder}
                className={props.className} 
                value={props.value}/>;
            break;
       
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className="form-row">
            <label className={props.labelClassName}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;