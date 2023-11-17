import { BACKEND_URL } from "../../public_variables";
import { useState } from "react";
import { useLocalStorage } from "../../utilities/localStoargeUtil";

const AuthLogin = ({ setUser }) => {
  const [isEmailInput, setIsEmailInput] = useState(true);
  const [email, setEmail] = useLocalStorage("email", null);
  const userCredentials = {email: "", password: ""};
  const [errorMessage, setErrorMessage] = useState("");

  const postEmailToServer = async (email) => {
    await fetch(BACKEND_URL + "/login1", {
      method: "POST",
      body: JSON.stringify({email: email}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((msg) => {
        if (msg.error) {
          setErrorMessage(msg.error);
          window.localStorage.setItem("email", null);
        } else {
          setIsEmailInput(false);
        }
      });
  }

  const postCredentialsToServer = async (userCredentials) => {
    await fetch(BACKEND_URL +"/login2", {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((userData) => userData.error ? setErrorMessage(userData.error) : setUser(userData));
  }

  const showPasswordOnClick = () => {
    const passwordInput = document.getElementById("loginPassInput");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  };

  const onBtnClick = async(e) => {
    e.preventDefault();
    setErrorMessage("");
    if (isEmailInput) {
      userCredentials.email = e.target.loginEmailInput.value;
      setEmail(e.target.loginEmailInput.value);
      postEmailToServer(userCredentials.email);
    } else {
      userCredentials.email = email;
      userCredentials.password = e.target.loginPassInput.value;
      console.log(userCredentials)
      postCredentialsToServer(userCredentials);
      window.localStorage.setItem("email", null);
    }
  };

  const backBtnOnClick = () => {
    setIsEmailInput(true);
    setErrorMessage("");
    userCredentials.email = "";
    userCredentials.password = "";
  };

  return (
    <div className="authlogin-container">
      <h2 className="auth-h2">Login to get Started!</h2>
      <p className="input-error-msg">{errorMessage}</p>
      <form className="d-flex flex-column" onSubmit={onBtnClick}>
        {
        isEmailInput ?
          <input 
            id="loginEmailInput"
            type="email" 
            className="form-control" 
            placeholder="Email"
            required />
          :
          <>
            <input 
              id="loginPassInput"
              type="password" 
              className="form-control" 
              placeholder="Password"
              title="Password must have at least one lowercase, one uppercase, a number and at least 8 characters long."
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required /> 
            
            <div className="form-check text-start py-2 align-self-end">
              <input id="showPassCB" type="checkbox" className="form-check-input" onClick={showPasswordOnClick} />
              <label className="form-check-label" htmlFor="showPassCB">Show Password</label>
            </div>
          </>
        }
        <div>
          {
            !isEmailInput &&
            <button type="button" className="btn custom-btn" onClick={backBtnOnClick}>Back</button>
          }
          <button type="submit" className="btn custom-btn float-end">{isEmailInput ? "Next" : "Login"}</button>
        </div>
      </form>
    </div>
  )
}

export default AuthLogin;