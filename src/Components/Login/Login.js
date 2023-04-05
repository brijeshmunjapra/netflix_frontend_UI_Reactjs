import React, { useState } from "react";
import "./Login.css";
import SignIn from "../SignIn/SignIn";

function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login-screen">
      <div className="login-background">
        <img
          className="login-screen-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158"
          alt="login-logo"
        />
        <button className="signin-button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="login-screen-gradient"></div>
        <div className="login-screen-body">
          {signIn ? (
            <SignIn setSignIn={setSignIn} />
          ) : (
            <>
              <h1>Unlimited movies, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime.</h2>
              <h2>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h2>
              <div className="login-screen-input">
                <input placeholder="Email address" />
                <button onClick={() => setSignIn(true)}>
                  Get Started {">"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
