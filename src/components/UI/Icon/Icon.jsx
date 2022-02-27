import React from "react";
import classes from './Icon.module.css';


const Icon = (props) => {
    const desc = props.desc ? props.desc[0] : '-';
    let className;
    if (typeof props.className === 'string') 
        className = [props.className];
    else 
        className = props.className;
    return (
        <div 
            className={[classes.icon, ...className].join(' ')}
        >
            <div className={classes.iconDesc}>{desc}</div>
        </div>
    );
};

export default Icon;