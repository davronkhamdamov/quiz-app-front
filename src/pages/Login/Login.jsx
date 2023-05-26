import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import google from "../../assets/icon_google.svg";
import { auth, googleAuth } from "../../firebase";

const Login = () => {
  const signInWithGoogle = () => {
    auth.signInWithPopup(googleAuth).then((data) => {
      fetch(
        process.env.REACT_APP_BASE_URL +
          `/auth/${data.additionalUserInfo.isNewUser ? "register" : "login"}`,
        {
          method: "POST",
          body: JSON.stringify({
            id: data.user.uid,
            username: data.user.displayName,
            email: data.user.email,
            photo: data.user.photoURL,
            isGoogleAuth: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data2) => {
          if (data2.access_token) {
            localStorage.setItem("authorization", data2.access_token);
            window.location = "/quizes";
          }
        });
    });
  };
  const submitData = (e) => {
    e.preventDefault();
    fetch(process.env.REACT_APP_BASE_URL + "/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          localStorage.setItem("authorization", data.access_token);
          window.location = "/quizes";
        }
      });
  };
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
        <div className="wrapper">
          <div className="login_form_wrapper">
            <div className="login_wrap">
              <h2>Login to your Account</h2>
              <h4>with your registered Email Address</h4>
              <br />
              <div className="hr"></div>
              <br />
              <form className="login_form" onSubmit={submitData}>
                <label htmlFor="user_email">Email address*</label>
                <input
                  name="email"
                  type="email"
                  required
                  id="user_email"
                  placeholder="Enter email address"
                  autoComplete="off"
                />
                <div className="user_password_wrap">
                  <label htmlFor="user_password">Enter password*</label>
                  <input
                    name="password"
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
                <button
                  type="button"
                  onClick={signInWithGoogle}
                  className="login_withGoogle_btn"
                >
                  <img src={google} alt="" />
                  Login with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
