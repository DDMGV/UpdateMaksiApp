import React, { useState, } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/MyInput/MyInput";
import InputMask from "react-input-mask";



const FormItem = (props)  => {

    const changeHandler = (e) => {
        if (!props.onChange) 
            return;
        props.onChange(e.target.value);
    }

    let input = undefined;
    if (props.mask) {
        input = <InputMask
                    className="user-form-input"
                    value={props.value} 
                    name={props.name} 
                    id={props.id}
                    onChange={changeHandler} 
                    mask={props.mask} 
                    placeholder={props.placeholder}
                ></InputMask>
    }
    else {
        input = <MyInput 
                    className="user-form-input"
                    value={props.value} 
                    name={props.name} 
                    id={props.id}
                    onChange={changeHandler} 
                    mask={props.mask} 
                    type={props.type ? props.type : 'text'}
                    placeholder={props.placeholder}
                />
    }

    return (
        <li className="user-form-item">
            <label 
                className="user-form-label"
                htmlFor={props.id}
            >
                {props.label}
            </label>
            {input}
        </li>
    )
}

const UserForm = ({create}) => {

    const [user, setUser] = useState({
        name:'', 
        username: '', 
        email: '',
        phone: '',
        address: {zipcode: ''}
    })

    const addNewUser = (e) => {
        e.preventDefault()
            const newUser = {
            ...user, id: Date.now()
        }
        create(newUser)
        setUser( {name:'',username: '',email: '',phone: '',address:{zipcode: ''}})
    }

    const [phone] = React.useState("");
    
    return (
        <form className="user-form"> 
            <h1 className="user-form-title">Добавить пользователя</h1>
            <ul className="user-form-list">
                <FormItem
                    label="ФИО:"
                    value={user.name} 
                    name='name'
                    id='form-name' 
                    onChange={value => {setUser(  {...user, name: value})}} 
                />
                <FormItem
                    label="Имя пользователя:"
                    value={user.username} 
                    name='username'
                    id='form-username' 
                    onChange={value => {setUser(  {...user, username: value})}} 
                />
                <FormItem
                    label="E-mail:"
                    value={user.email} 
                    name="email"
                    id="form-email" 
                    type="email"
                    placeholder="my@email.com"
                    onChange={value => {setUser(  {...user, email: value})}} 
                />
                <FormItem
                    label="Номер телефона:"
                    value={user.phone} 
                    name="phone"
                    id="form-phone" 
                    mask="+7\(999)999-99-99"
                    placeholder="+7(___)___-__-__"
                    onChange={value => {setUser(  {...user, phone: value})}} 
                />
                <FormItem
                    label="Почтовый индекс:"
                    value={user.zipcode} 
                    name="zipcodeusername"
                    id="form-zipcode" 
                    placeholder="1234-5678"
                    onChange={value => {setUser(  {...user, zipcode: value})}} 
                />
            </ul>
            <MyButton 
                onClick={addNewUser}> 
                Добавить пользователя 
            </MyButton><br></br>
        </form>
    );
};
    
export default UserForm;