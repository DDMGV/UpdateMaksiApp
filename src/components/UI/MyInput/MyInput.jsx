import React from "react";
import classes from './MyInput.module.css';

const MyInput = (props) => {
    const className = props.className 
                        ? classes.myInput + ' ' + props.className 
                        : '';
    return (
        <input 
            className={className} {...props}
            id={props.id}
            type={props.type ? props.type : 'email'}
        />
    );
};

export default MyInput;