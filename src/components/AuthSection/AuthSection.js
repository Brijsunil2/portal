import googleIcon from "../../assets/google.svg";
import "./AuthSection.css";
import AuthBtn from "./AuthBtn";
import AuthDiv from "./AuthDiv";

const AuthSection = ({loginOnClick}) => {
  return (
    <div className="auth-container">
      <AuthBtn imgSrc={googleIcon} text={"Sign in with Google"} loginOnClick={loginOnClick} />
      <AuthDiv text={"OR"} />
      <AuthBtn imgSrc={googleIcon} text={"Sign up with Google"} loginOnClick={loginOnClick} />
    </div>
  )
};

export default AuthSection