import React, { useState, useEffect } from 'react'
import { API_BASE_URL } from '../../Resources/consts';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = ({fSetUser}) => {

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
                console.log(response)
                if (response.status == 202) {
                    const data = await response.json()
                    console.log(data);
                    fSetUser(data)
                }
                else console.log("Registration failed")
            })
    }

    return(
        <div className='register'>
        <h1>Register account</h1>
        <Form>
            <Form.Group className='w-25'>
                <Form.Group>First name:</Form.Group>
                <Form.Control type="text" name="firstName" placeholder='Enter first name' onChange={changeFirstName}/>
            </Form.Group>
            <Form.Group className='w-25'>
                <Form.Group>Last name:</Form.Group>
                <Form.Control type="text" name="lastName" placeholder='Enter last name' onChange={changeLastName}/>
            </Form.Group>
            <Form.Group className='w-25'>
                <Form.Group>Email:</Form.Group>
                <Form.Control type="email" name="email" placeholder='Enter email' onChange={changeEmail}/>
            </Form.Group>
            <Form.Group className='w-25'>
                <Form.Group>Password</Form.Group>
                <Form.Control type="password" name="password" placeholder='Enter password' onChange={changePassword}/>
            </Form.Group>
        </Form>
        <Button onClick={regUser}>Register user</Button>
        </div>
)};

export default Register