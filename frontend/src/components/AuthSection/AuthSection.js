import googleIcon from "../../assets/google.svg";
import "./AuthSection.css";
import AuthBtn from "./AuthBtn";
import AuthDiv from "./AuthDiv";

const AuthSection = ({login}) => {
  return (
    <div className="auth-container">
      <AuthBtn imgSrc={googleIcon} text={"Sign in with Google"} login={login} />
      <AuthDiv text={"OR"} />
      <AuthBtn imgSrc={googleIcon} text={"Sign up with Google"} login={login} />
    </div>
  )
};

export default AuthSection