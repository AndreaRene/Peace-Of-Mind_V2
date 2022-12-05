import React, { useState } from 'react';
import LoginCard from '../components/login/LoginCard';
import SignupCard from '../components/login/SignupCard';

import '../utils/css/Login.css';

const Login = () => {

  return (
    <main className="loginWrapper" id="loginMain">
      <div id="log-sign-holder">
        <LoginCard />
        <div id="loginOr">OR</div>
        <SignupCard />
      </div>
    </main>
  );
};
export default Login;
