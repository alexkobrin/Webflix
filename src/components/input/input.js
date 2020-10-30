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
                className={props.className} />;
            break;
        case ('textarea'):
            inputElement = <textarea
                type={props.type}
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
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