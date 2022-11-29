import React from 'react';

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
    <section className="align-items-center" title="loginCards" id="login-card-section">
      <div className="loginCard" id="login-card">
        <h2 className="card-header">Log In:</h2>
        <form className="postTexts">
          <div className="">
            <label className="form-label">Username:</label>
            <input className="" type="text" id="username-input-login" />
          </div>
          <div className="">
            <label className="">Password:</label>
            <input className="" type="password" id="password-input-login" />
          </div>
          <div className="">
            <button className="loginButtons" onClick={loginFormHandler} type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>

      <span id="loginOr">OR</span>

      <div className="loginCard">
        <h2 className="card-header">Sign Up:</h2>
        <form className="postTexts">
          <div className="">
            <label className="form-label">Username:</label>
            <input className="" type="text" id="username-input-signup" />
          </div>
          <div className="">
            <label className="form-label">Password:</label>
            <input className="" type="password" id="password-input-signup" />
          </div>
          <div className="">
            <button className="loginButtons" onClick={signupFormHandler} type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Login;
