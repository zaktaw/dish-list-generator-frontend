import React, { useState, useEffect } from 'react'
import Register from "./Register";
import { API_BASE_URL } from "../Resources/consts";

const Login = ({fSetUser}) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function changeEmail(e) {
        setEmail(e.currentTarget.value);
    }

    function changePassword(e) {
        setPassword(e.currentTarget.value);
    }

    function login() {
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
                 console.log(response)
                 if (response.status == 200) {
                    const data = await response.json();
                    fSetUser(data)
                 }
                 else console.log("Login failed")
             })
     }
     
     return(
    <div className='card'>
    <h1>Login</h1>
    <form>
        <div>
            <label>Email:</label>
            <input type="text" name="email" onChange={changeEmail}/>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name="password" onChange={changePassword}/>
        </div>
    </form>
    <button onClick={login}>Login</button>
    <Register fSetUser={fSetUser}/>
    </div>
)}

export default Login