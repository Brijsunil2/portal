
const AuthBtn = ({imgSrc, text, login}) => {

  return (
    <button type="submit" className="auth-btn" onClick={() => login()} >
      <img src={imgSrc} alt={text}/>
      <span>{text}</span>
    </button>
  )
};

export default AuthBtn;