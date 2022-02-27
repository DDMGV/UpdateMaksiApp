import React from "react";
import MyButton from "./UI/button/MyButton";

import Checkbox from "./UI/Checkbox/Checkbox";
import Icon from "./UI/Icon/Icon";
import '../styles/App.css';


function UserAttribute(props) {
    return (
        <li className="atributes-item">
            <div className="atributes-item-name">
                { props.name }
            </div>
            <div className="atributes-item-value">
                { props.value }
            </div>
        </li>
    )
}

const UserItem = (props) => {
    const user = props.user;
    const userAttributes = [
        { name: "Имя:", value: user.name },
        { name: "Никнейм:", value: user.username },
        { name: "E-mail:", value: user.email },
        { name: "Номер:", value: user.phone },
        { name: "Почтовый адрес:", value: user.address.zipcode },
    ];

    const changeHandler = ({checked}) => {
        if (!props.onChange) 
            return;
        props.onChange({checked, user})
    }

    let checkbox = undefined;
    
    if (props.showCheckbox) {
        checkbox = <Checkbox
            onChange={changeHandler}
        />
    }
    return (
        <div className="user">
            <div className="user-content">
                <Icon
                    desc={props.user.name}
                    className="user-icon"
                ></Icon>
                <ul className="atributes">
                    {userAttributes.map((attr, index)  =>
                        <UserAttribute 
                            key={index}
                            name={attr.name}
                            value={attr.value}
                        />
                    )}
                </ul>
            </div>
            <div className="user-actions"> 
                {checkbox}
            </div>
        </div>
    );
};

export default UserItem;