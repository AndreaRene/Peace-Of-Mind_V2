import React, { useState } from 'react';
import LoginCard from '../components/login/LoginCard';
import SignupCard from '../components/login/SignupCard';

import '../utils/css/Login.css';

const Login = () => {

  return (
    <main className="loginWrapper" id="loginMain">
<<<<<<< HEAD
          <LoginCard />
        <div id="loginOr">OR</div>
          <SignupCard />
=======
      <LoginCard />
      <div id="loginOr">OR</div>
      <SignupCard />
>>>>>>> 2e0c2119ac2055d80304b50ba0c06f92321501d6
    </main>
  );
};
export default Login;