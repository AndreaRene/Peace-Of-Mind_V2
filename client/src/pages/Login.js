import React from 'react';
import { Card, Col, Row, Button } from 'antd';
import '../utils/css/Login.css';

// login

const loginFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#username-input-login');
  const passwordEl = document.querySelector('#password-input-login');

  const response = await fetch('/api/user/login', {
    method: 'POST',
    body: JSON.stringify({
      user_name: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/api/dashboard');
  } else {
    alert('Failed to login');
  }
};

// signup

const signupFormHandler = async function (event) {
  event.preventDefault();

  const user_name = document
    .querySelector('#username-input-signup')
    .value.trim();
  const password = document
    .querySelector('#password-input-signup')
    .value.trim();
  const response = await fetch('/api/user', {
    method: 'POST',
    body: JSON.stringify({
      user_name,
      password,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/api/dashboard');
  } else {
    alert('Failed to sign up');
  }
};

const Login = () => {
  return (
    <main className="loginWrapper" id="loginMain">
      {/* <Row>
        <Col> */}
      <Card title="Log In:" bordered={false} id="login-card">
        <form className="form" id="loginForm">
          <div className="loginText">
            <label className="">Username:</label>
            <input className="loginInput" type="text" id="username-input-login" />
          </div>
          <div className="loginText">
            <label className="">Password:</label>
            <input className="loginInput" type="password" id="password-input-login" />
          </div>
          <div className="">
            <Button className="button" onClick={loginFormHandler} type="submit" id="loginButton">
              Log In
            </Button>
          </div>
        </form>
      </Card>
      {/* </Col> */}

      <div id="loginOr">OR</div>

      {/* <Col> */}
      <Card title="Sign Up:" bordered={false} id="signup-card">
        <form className="form" id="signupForm">
          <div className="loginText">
            <label className="">Username:</label>
            <input className="loginInput" type="text" id="username-input-signup" />
          </div>
          <div className="loginText">
            <label className="">Password:</label>
            <input className="loginInput" type="password" id="password-input-signup" />
          </div>
          <div className="">
            <Button className="button" onClick={signupFormHandler} type="submit" id="signupButton">
              Sign Up
            </Button>
          </div>
        </form>
      </Card>
      {/* </Col> */}
      {/* </Row> */}
    </main>

  );
};
export default Login;
