// Hello.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Hello.css';




function Hello() {
  return (
    <div className="Hello">
    
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="Enter Username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" />
      </div>
      <div className="form-group">
        <Link to="/helloworld" className="forgot-password">
          Forgot password?
        </Link>
      </div>
      <div className="form-group">
        <Link to="/Signup" className="go-to-hello-world">
          Go to HelloWorld
        </Link>
      </div>
    </form>
  </div>
  );
}

export default Hello;
