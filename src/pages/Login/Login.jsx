import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import google from "../../assets/icon_google.svg";

const Login = () => {
  return (
    <div className="login_wrapper">
      <div className="login_wrapper_item_bg">
        <div className="login_bg_text">
          <p className="text">
            Those people who develop the ability to continuously acquire new and
            better forms of knowledge that they can apply to their work and to
            their lives will be the movers and shakers in our society for the
            indefinite future
          </p>
          <p className="author">Brian Tracy</p>
        </div>
      </div>
      <div className="login_wrapper_item">
        <Link to="/" className="back_link">
          <IoIosArrowBack /> Back
        </Link>
        <div className="login_form_wrapper">
          <div className="login_wrap">
            <h2>Login to your Account</h2>
            <h4>with your registered Email Address</h4>
            <br />
            <div className="hr"></div>
            <br />
            <form method="post" className="login_form">
              <label htmlFor="user_email">Email address*</label>
              <input
                type="email"
                required
                id="user_email"
                placeholder="Enter email address"
                autoComplete="off"
              />
              <div className="user_password_wrap">
                <label htmlFor="user_password">Enter password*</label>
                <input
                  type="password"
                  required
                  id="user_password"
                  placeholder="Password"
                  autoComplete="off"
                />
                <button type="button" className="isVisiblePassword">
                  show
                </button>
              </div>
              <div className="remember_btn">
                <input type="checkbox" name="" id="remember" />
                <label htmlFor="remember">Remember my password</label>
              </div>
              <button className="login_btn">Login</button>
              <div className="hr">
                <p className="orText">or</p>
              </div>
              <button className="login_withGoogle_btn">
                <img src={google} alt="" />
                Login with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
