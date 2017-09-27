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

        <div className="login-page">
            <div className="form">
                <form className="login-form">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button>login</button>
                <p className="message">Not registered? <a href="#">Create an account</a></p>
                </form>
            </div>
        </div>

    </section>
  );
}

export default Login;