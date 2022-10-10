import React, { useState, useEffect } from 'react'
import Register from "./Register";
import { API_BASE_URL } from "../Resources/consts";

const Login = ({login}) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function changeEmail(e) {
        setEmail(e.currentTarget.value);
    }

    function changePassword(e) {
        setPassword(e.currentTarget.value);
    }

    function loginUser() {
        const user = {
         "email": email,
         "password": password
        }
 
        const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(user)
         }
 
         fetch(API_BASE_URL + '/login', requestOptions)
             .then(async response => {
                 console.log("Response status:")
                 console.log(response.status)
                 if (response.status == 200) login()
                 else console.log("Login failed")
             })
     }
     
     return(
    <div>
    <h1>Login</h1>
    <form>
        <label>Email:</label>
        <input type="text" name="email" onChange={changeEmail}/>
        <label>Password:</label>
        <input type="password" name="password" onChange={changePassword}/>
    </form>
    <button onClick={loginUser}>Login</button>
    <Register login={login}/>
    </div>
)}

export default Login