import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { loginRequest } from '../../apiRequests';

const Login = ({ fSetUser }) => {

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

        loginRequest(user)
            .then(async response => {

                if (response.status == 200) {
                    const data = await response.json();
                    fSetUser(data)
                }
                else alert("Login failed");
            })
    }

    return (
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
    )
}

export default Login