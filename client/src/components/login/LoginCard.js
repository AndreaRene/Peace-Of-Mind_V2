import React, { useState } from 'react'
import { Card, Col, Row, Button } from 'antd';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/js/mutations';

import Auth from '../../utils/js/auth';

function LoginCard() {
    const [formState, setFormState] = useState({ username: '', password: '' });
    const [login, { data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const loginFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            username: '',
            password: '',
        });
    };

    return (


        <Card title="Log In:" bordered={false} id="login-card">
            <form className="form" id="loginForm">
                <div className="loginText">
                    <label className="">Username:</label>
                    <input className="loginInput" type="text" id="username-input-login" name="username" value={formState.username} onChange={handleChange} />
                </div>
                <div className="loginText">
                    <label className="">Password:</label>
                    <input className="loginInput" type="password" id="password-input-login" name="password" value={formState.password} onChange={handleChange} />
                </div>
                <div>
                    <Button className="button" onClick={loginFormSubmit} type="submit" id="loginButton">
                        Log In
                    </Button>
                </div>
            </form>
        </Card>


    )
}

export default LoginCard