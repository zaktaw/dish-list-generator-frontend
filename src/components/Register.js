import React, { useState, useEffect } from 'react'
import { API_BASE_URL } from '../Resources/consts';

const Register = ({login}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function changeFirstName(e) {
        setFirstName(e.currentTarget.value);
    }

    function changeLastName(e) {
        setLastName(e.currentTarget.value);
    }

    function changeEmail(e) {
        setEmail(e.currentTarget.value);
    }

    function changePassword(e) {
        setPassword(e.currentTarget.value);
    }

    function regUser() {
       const user = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "password": password
       }

       const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
        }

        fetch(API_BASE_URL + '/register', requestOptions)
            .then(async response => {
                console.log("Response status:")
                console.log(response.status)
                if (response.status == 202) login()
                else console.log("Registration failed")
            })
    }

    return(
        <div>
        <h1>Register account</h1>
        <form>
            <label>First name:</label>
            <input type="text" name="firstName" onChange={changeFirstName}/>
            <label>Last name:</label>
            <input type="text" name="lastName" onChange={changeLastName}/>
            <label>Email:</label>
            <input type="text" name="email" onChange={changeEmail}/>
            <label>Password</label>
            <input type="password" name="password" onChange={changePassword}/>
        </form>
        <button onClick={regUser}>Register user</button>
        </div>
)};

export default Register