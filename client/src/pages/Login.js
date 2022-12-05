import React, { useState } from 'react';
import LoginCard from '../components/login/LoginCard';
import SignupCard from '../components/login/SignupCard';

import '../utils/css/Login.css';

const Login = () => {

  return (
    <main className="loginWrapper" id="loginMain">
          <LoginCard />
        <div id="loginOr">OR</div>
          <SignupCard />
    </main>
  );
};
export default Login;