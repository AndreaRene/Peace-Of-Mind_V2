import React, { useState } from 'react'
import { Card, Col, Row, Button } from 'antd';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/js/mutations';

import Auth from '../../utils/js/auth';

function SignupCard() {
    const [formState, setFormState] = useState({ username: '', password: ''});
    const [addUser, { data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const signupFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch(e) {
            console.error(e);
        }

        setFormState({
            username: '',
            password: '',
        });
    };

    return (
        <>
        {data ? (
            <div><p>Success!</p></div>
        ) : (
            <Card title="Sign Up:" bordered={false} id="signup-card">
                <form className="form" id="signupForm">
                <div className="loginText">
                    <label className="">Username:</label>
                    <input className="loginInput" type="text" id="username-input-signup" name="username" value={formState.username} onChange={handleChange} />
                </div>
                <div className="loginText">
                    <label className="">Password:</label>
                    <input className="loginInput" type="password" id="password-input-signup" name="password" value={formState.password} onChange={handleChange} />
                </div>
                <div className="">
                    <Button className="button" type="submit" onClick={signupFormSubmit} id="signupButton">
                    Sign Up
                    </Button>
                </div>
                </form>
            </Card>
        )}
        </>
    )
}

export default SignupCard