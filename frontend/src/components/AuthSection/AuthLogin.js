import { useState } from "react";

const AuthLogin = () => {
  const [isUsernameInput, setIsUsernameInput] = useState(true);
  const [userCredentials, setUserCredentials] = useState({username: "", password: ""});

  const usernameInputOnChange = (e) => {
    setUserCredentials({...userCredentials, username: e.target.value});
  };

  const onBtnClick = (e) => {
    e.preventDefault();
    setIsUsernameInput(false);
    console.log(userCredentials)
  };

  return (
    <div className="authlogin-container">
      <h2 className="auth-h2">Login to get Started!</h2>
      <form className="d-flex flex-column" onSubmit={onBtnClick}>
        {
        isUsernameInput ?
          <input 
            type="text" 
            className="form-control" 
            placeholder="Username"
            minLength="6"
            maxLength="25"
            value={userCredentials.username}
            onChange={usernameInputOnChange}
            title=""
            required />
          :
          <input 
            type="password" 
            className="form-control" 
            placeholder="Password"
            value={userCredentials.password}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            required /> 
        }
        <button type="submit" className="btn custom-btn align-self-end">{isUsernameInput ? "Next" : "Login"}</button>
      </form>
    </div>
  )
}

export default AuthLogin;