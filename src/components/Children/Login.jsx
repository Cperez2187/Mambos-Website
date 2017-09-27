/**
|--------------------------------------------------
| Stateless Contact component.
| Displays ContactUs and Map sub components.
|--------------------------------------------------
*/

import React from 'react';

const Login = () => {
  return (
    <section className="section-login row" id="section-login">
    {/*Write code here */}

    <div className="login-clean">
    <h2>Administrator Login</h2>
        <form method="POST" action='/api/login'>
            <h2 className="sr-only">Login Form</h2>
            {/* <div className="illustration"><img src="../../../public/images/small.png" /></div> */}
            <div className="form-group">
                <input className="form-control" type="username" name="username" placeholder="Username" />
            </div>
            <div className="form-group">
                <input className="form-control" type="password" name="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">Log In</button>
            </div><a href="#" className="forgot">Forgot your email or password?</a>
        </form>

    </div>

    </section>
  );
}

export default Login;