import React from "react";
import "./Login.css"

function Login() {
  return (
    <div className="login-screen">
      <div className="login-background">
        <img
          className="login-screen-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
          alt="login-logo"
        />
        <button className="signin-button">Sign In</button>
        <div className="login-screen-gradient"></div>
        <div className="login-screen-body">
            <h1>Unlimited movies, TV shows and more.</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
