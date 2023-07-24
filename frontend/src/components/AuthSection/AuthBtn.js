
const AuthBtn = ({imgSrc, text}) => {

  return (
    <button type="submit" className="auth-btn" >
      {imgSrc && <img src={imgSrc} alt={text}/>}
      <span>{text}</span>
    </button>
  )
};

export default AuthBtn;