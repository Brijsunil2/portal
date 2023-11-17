import { BACKEND_URL } from "../../public_variables";
import { useState } from "react";
const AuthSignup = ({ setUser }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const userCredentials = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  const showPasswordOnClick = () => {
    const passwordInput = document.getElementById("signupPassInput");
    const repasswordInput = document.getElementById("signupRePassInput");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      repasswordInput.type = "text";
    } else {
      passwordInput.type = "password";
      repasswordInput.type = "password";
    }
  };

  const onBtnClick = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    userCredentials.firstname = e.target.signupFirstnameInput.value;
    userCredentials.lastname = e.target.signupLastnameInput.value;
    userCredentials.email = e.target.signupEmailInput.value;
    userCredentials.password = e.target.signupPassInput.value;

    if (e.target.signupRePassInput.value !== userCredentials.password) {
      setErrorMessage("Passwords do not match");
    } else {
      postUserInfoToServer(userCredentials);
    }
  };

  const postUserInfoToServer = async (userCredentials) => {
    await fetch(BACKEND_URL +"/signup", {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((userData) => userData.error ? setErrorMessage(userData.error) : setUser(userData));
  }

  return (
    <div className="authsignup-container">
      <h2 className="auth-h2">Signup to get Started!</h2>
      <p className="input-error-msg">{errorMessage}</p>
      <form className="d-flex flex-column" onSubmit={onBtnClick}>
        <div className="d-flex justify-content-between">
          <input 
            id="signupFirstnameInput"
            type="text" 
            className="form-control me-1" 
            placeholder="Firstname"
            required />
          <input 
            id="signupLastnameInput"
            type="text" 
            className="form-control ms-1" 
            placeholder="Lastname"
            required />
        </div>
        <input 
          id="signupEmailInput"
          type="email" 
          className="form-control" 
          placeholder="Email"
          required />
        <input 
          id="signupPassInput"
          type="password" 
          className="form-control" 
          placeholder="Password"
          title="Password must have at least one lowercase, one uppercase, a number and at least 8 characters long."
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          required /> 
        <input 
          id="signupRePassInput"
          type="password" 
          className="form-control" 
          placeholder="Retype Password"
          title="Password must have at least one lowercase, one uppercase, a number and at least 8 characters long."
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          required /> 
        <div className="form-check text-start py-2 align-self-end">
          <input id="showPassCB" type="checkbox" className="form-check-input" onClick={showPasswordOnClick} />
          <label className="form-check-label" htmlFor="showPassCB">Show Password</label>
        </div>
        <div>
          <button type="submit" className="btn custom-btn float-end">Signup</button>
        </div>
      </form> 
    </div>
  );
};

export default AuthSignup;