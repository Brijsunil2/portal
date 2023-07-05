const AuthBtn = ({imgSrc, text}) => {
  return (
    <div className="auth-btn">
      <img src={imgSrc} />
      <span>{text}</span>
    </div>
  )
};

export default AuthBtn;