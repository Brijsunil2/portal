const AuthBtn = ({imgSrc, text, loginOnClick}) => {
  return (
    <div className="auth-btn" onClick={loginOnClick}>
      <img src={imgSrc} />
      <span>{text}</span>
    </div>
  )
};

export default AuthBtn;