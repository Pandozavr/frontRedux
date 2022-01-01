import React from 'react';
import "./Button.css"

export const Button = (props) => {

    const btnClasses = ["btn", props.type];

    return (
        <button onClick={props.click} className={btnClasses.join(" ")}>
            {props.name}
        </button>
    );
};