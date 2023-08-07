import { useState } from "react";
import "./AuthSection.css";
import AuthLogin from "./AuthLogin";
import AuthSignup from "./AuthSignup";

const AuthSection = ({ setUser, socket }) => {
  const [credentials, setCredentials] = useState();
  const [isLogin, setIsLogin] = useState(true);

  // const submitUser = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:4000/users", {
  //     method: "POST",
  //     body: JSON.stringify({username: username, socketID: socket.id}),
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((res) => res.json())
  //     .then((userData) => setUser(userData));
  // }

  const loginOnClick = () => {
    setIsLogin(true);
  };

  const signupOnClick = () => {
    setIsLogin(false);
  };

  return (
    <div className="auth-container">
      <ul className="auth-nav nav nav-pills col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li className="nav-item">
          <button 
            className={"nav-link nav-btn " + (isLogin &&"active")}
            onClick={loginOnClick} >
              Login
          </button>
        </li>
        <li className="nav-item">
          <button 
            className={"nav-link nav-btn " + (!isLogin &&"active")}
            onClick={signupOnClick} >
              Sign-up
          </button>
        </li> 
      </ul>

      <div className="authbody-container">
        { isLogin ? <AuthLogin /> : <AuthSignup /> }
      </div>
    </div>
  )
};

export default AuthSection