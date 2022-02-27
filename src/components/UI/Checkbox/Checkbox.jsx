import React from "react";
import classes from './Checkbox.module.css';

const Checkbox = (props) => {    

    const handleChange = (event) => {
        if (typeof props.onChange !== 'function') 
            return;
        props.onChange({
            value: event.target.value,
            checked: event.target.checked,
        });
    }

    return (
        <div className={classes.checkbox}>
            <label className={classes.checkboxLabel}>
                <input  
                    type='checkbox'
                    value={props.value}
                    name={props.name}
                    onChange={handleChange}
                    className={classes.checkboxInput}
                />
                <div className={classes.checkboxFill}></div>
            </label>
        </div>
    );
};

export default Checkbox;