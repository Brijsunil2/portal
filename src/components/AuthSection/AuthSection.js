import googleIcon from "../../assets/google.svg";
import "./AuthSection.css";
import AuthBtn from "./AuthBtn";
import AuthDiv from "./AuthDiv";

const AuthSection = ({onSigninClick}) => {
  return (
    <div className="auth-container">
      <AuthBtn imgSrc={googleIcon} text={"Sign in with Google"} onClickFunc={onSigninClick} />
      <AuthDiv text={"OR"} />
      <AuthBtn imgSrc={googleIcon} text={"Sign up with Google"} onClickFunc={onSigninClick} />
    </div>
  )
};

export default AuthSection