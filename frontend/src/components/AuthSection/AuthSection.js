import { useState } from "react";
import googleIcon from "../../assets/google.svg";
import "./AuthSection.css";
import AuthBtn from "./AuthBtn";
import AuthDiv from "./AuthDiv";
import Button from "../Button/Button";

const AuthSection = ({ setUser }) => {
  const [username, setUsername] = useState("");

  const usernameChange = (e) => {
    setUsername(e.target.value);
  }

  const submitUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/users", {
      method: "POST",
      body: JSON.stringify({username: username}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((userData) => setUser(userData));
  }

  return (
    <div className="auth-container">
      {/* <AuthBtn imgSrc={googleIcon} text={"Sign in with Google"} />
      <AuthDiv text={"OR"} />
      <AuthBtn imgSrc={googleIcon} text={"Sign up with Google"} /> */}
      <form className="px-4 d-flex flex-column" onSubmit={submitUser}>
        <input type="text" className="form-control" name="username" placeholder="Username" value={ username } onChange={usernameChange} />
        <AuthBtn text={"Submit"}/>
      </form>
    </div>
  )
};

export default AuthSection