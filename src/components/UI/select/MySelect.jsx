import React from "react";
import classes from './MySelect.module.css';

const MySelect = (props) => {

    const changeHandler = (event) => {
        if (!props.onChange) 
            return;
        props.onChange(event.target.value);
    }

    return (
        <select 
            className={classes.mySelect}
            onChange={event => changeHandler(event)}
        >
            {props.options.map(option =>
                <option 
                    key={option.value} 
                    value={option.value}
                    default={option.default}
                >
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;

