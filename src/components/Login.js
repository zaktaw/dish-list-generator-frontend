import React, { useState, useEffect } from 'react'
import { API_BASE_URL } from "../Resources/consts";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
    <div>
    <h1>Login</h1>
    <Form>
        <Form.Group className='w-25'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' onChange={changeEmail}></Form.Control>
        </Form.Group>
        <Form.Group className='w-25'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter password' onChange={changePassword}></Form.Control>
        </Form.Group>
    </Form>
    <Button variant="primary" onClick={login}>Login</Button>
    </div>
)}

export default Login