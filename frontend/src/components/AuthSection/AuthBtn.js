const AuthBtn = ({imgSrc, text, onClickFunc}) => {
  return (
    <form action="http://localhost:4000/auth/google">
      <button type="submit" className="auth-btn" >
        <img src={imgSrc} />
        <span>{text}</span>
      </button>
   </form>
  )
};

export default AuthBtn;