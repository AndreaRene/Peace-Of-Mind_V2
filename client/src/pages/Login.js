import React from 'react';
import { Card, Col, Row } from 'antd';
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
    <main className="mainContent loginWrapper">
      {/* <Row>
        <Col> */}
      <Card title="Log In:" bordered={false} id="login-card">
        <form className="">
          <div className="">
            <label className="">Username:</label>
            <input className="" type="text" id="username-input-login" />
          </div>
          <div className="">
            <label className="">Password:</label>
            <input className="" type="password" id="password-input-login" />
          </div>
          <div className="">
            <button className="" onClick={loginFormHandler} type="submit">
              Log In
            </button>
          </div>
        </form>
      </Card>
      {/* </Col> */}

      <div id="loginOr">OR</div>

      {/* <Col> */}
      <Card title="Sign Up:" bordered={false} id="signup-card">
        <form className="">
          <div className="">
            <label className="">Username:</label>
            <input className="" type="text" id="username-input-signup" />
          </div>
          <div className="">
            <label className="">Password:</label>
            <input className="" type="password" id="password-input-signup" />
          </div>
          <div className="">
            <button className="" onClick={signupFormHandler} type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </Card>
      {/* </Col> */}
      {/* </Row> */}
    </main>

    // <section className="" title="loginCards" id="login-card-section">
    //   <div className="" id="login-card">
    //     <h2 className="">Log In:</h2>
    //     <form className="">
    //       <div className="">
    //         <label className="">Username:</label>
    //         <input className="" type="text" id="username-input-login" />
    //       </div>
    //       <div className="">
    //         <label className="">Password:</label>
    //         <input className="" type="password" id="password-input-login" />
    //       </div>
    //       <div className="">
    //         <button className="" onClick={loginFormHandler} type="submit">
    //           Log In
    //         </button>
    //       </div>
    //     </form>
    //   </div>

    //   <span id="loginOr">OR</span>

    //   <div className="">
    //     <h2 className="">Sign Up:</h2>
    //     <form className="">
    //       <div className="">
    //         <label className="">Username:</label>
    //         <input className="" type="text" id="username-input-signup" />
    //       </div>
    //       <div className="">
    //         <label className="">Password:</label>
    //         <input className="" type="password" id="password-input-signup" />
    //       </div>
    //       <div className="">
    //         <button className="" onClick={signupFormHandler} type="submit">
    //           Sign Up
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </section>
  );
};
export default Login;
