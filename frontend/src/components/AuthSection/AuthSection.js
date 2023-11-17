import { useState } from "react";
import "./AuthSection.css";
import AuthLogin from "./AuthLogin";
import AuthSignup from "./AuthSignup";

const AuthSection = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);

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
        { isLogin ? <AuthLogin setUser={setUser} /> : <AuthSignup setUser={setUser} /> }
      </div>
    </div>
  )
};

export default AuthSection