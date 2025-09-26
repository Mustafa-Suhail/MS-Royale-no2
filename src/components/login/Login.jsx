import React from 'react';
import './Login.css'; 
import { Link } from 'react-router-dom';

function Login() {
  function handleLogin(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form onSubmit={handleLogin}>
        <div className="input-group mt-3">
          <label>Email:</label>
          <input type="email" name="email"/>
        </div>

        <div className="input-group mt-3">
          <label>Password:</label>
          <input type="password" name="password" />
        </div>

        <button className='mt-3' type="submit">Login</button>
        <Link className='p-5 mt-4 pass' to = "/forgotten-password">Forgotten Password?</Link>

       <hr />
        <Link className='mt-4' to = "/signup">Doesn't have an account? Sign Up</Link>
      </form>
    </div>
  );
}

export default Login;
