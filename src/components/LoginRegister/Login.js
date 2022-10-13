import React, { useState, useEffect } from 'react'
import { API_BASE_URL } from "../../Resources/consts";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = ({fSetUser}) => {

    const [username, setusername] = useState()
    const [password, setPassword] = useState()

    function changeusername(e) {
        setusername(e.currentTarget.value);
    }

    function changePassword(e) {
        setPassword(e.currentTarget.value);
    }

    function login() {
        const user = {
         "username": username,
         "password": password
        }
 
        const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(user)
         }
 
         fetch(API_BASE_URL + '/login', requestOptions)
             .then(async response => {
              
                 if (response.status == 200) {
                    const data = await response.json();
                    fSetUser(data)
                 }
                 else alert("Login failed");
             })
     }
     
     return(
    <div>
    <h1>Login</h1>
    <Form>
        <Form.Group>
            <Form.Label>username</Form.Label>
            <Form.Control type='username' placeholder='Enter username' onChange={changeusername}></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter password' onChange={changePassword}></Form.Control>
        </Form.Group>
    </Form>
    <Button variant="primary" onClick={login}>Login</Button>
    </div>
)}

export default Login