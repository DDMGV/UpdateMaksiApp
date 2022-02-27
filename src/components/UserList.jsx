import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import UserItem from "./UserItem";

const UserList = ({users, onChange, showCheckboxes}) => {

    const changeHandler = (value) => {
        if (!onChange) 
            return;
        onChange(value)
    }

    return ( 
        <div>
            {users.map((user, index )  =>
                <UserItem 
                    onChange={changeHandler} 
                    showCheckbox={showCheckboxes}
                    key={index} 
                    user={user}
                />
            )}
                  
        </div>
    );
};

export default UserList;