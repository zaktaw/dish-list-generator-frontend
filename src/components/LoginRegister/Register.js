import React, { useState, useEffect } from 'react'
import { registerRequest } from '../../apiRequests';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = ({ fSetUser }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeated, setPasswordRepeated] = useState('');

    function changeUsername(e) {
        setUsername(e.currentTarget.value);
    }

    function changePassword(e) {
        setPassword(e.currentTarget.value);
    }

    function changePasswordRepeated(e) {
        setPasswordRepeated(e.currentTarget.value);
    }

    function regUser() {

        if (password != passwordRepeated) return alert("Passwords do not match");

        const user = {
            "username": username,
            "password": password
        }

        registerRequest(user)
            .then(async response => {
                if (response.status == 201) {
                    const data = await response.json()
                    fSetUser(data)
                }
                else alert("Registration failed")
            })
    }

    return (
        <div className='register'>
            <h1>Register account</h1>
            <Form>
                <Form.Group>
                    <Form.Group>Username:</Form.Group>
                    <Form.Control type="username" name="username" placeholder='Enter username' onChange={changeUsername} />
                </Form.Group>
                <Form.Group>
                    <Form.Group>Password</Form.Group>
                    <Form.Control type="password" name="password" placeholder='Enter password' onChange={changePassword} />
                </Form.Group>
                <Form.Group>
                    <Form.Group>Repeat password</Form.Group>
                    <Form.Control type="password" name="password" placeholder='Enter password' onChange={changePasswordRepeated} />
                </Form.Group>
            </Form>
            <Button onClick={regUser}>Register user</Button>
        </div>
    )
};

export default Register