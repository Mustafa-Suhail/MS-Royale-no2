import React from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css"
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
          <label>Qualification:</label>
          <input type="Text" name="text"/>
        </div>
        <div className="input-group mt-3">
          <label>Mobile Number:</label>
          <input type="number" name="number" />
        </div>
        <div className="input-group mt-3">
          <label>Password:</label>
          <input type="password" name="password"/>
        </div>
        <hr />
         <Link className='p-5 mt-4 pass' to = "/forgotten-password">Forgotten Password?</Link>

        <button className="mt-3" type="submit">Add Account</button>
      </form>
    </div>
  );
}

export default Login;

