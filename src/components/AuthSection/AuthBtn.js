
const AuthBtn = ({imgSrc, text}) => {

  return (
    <form action="http://localhost:3000">
      <button type="submit" className="auth-btn" >
        <img src={imgSrc} />
        <span>{text}</span>
      </button>
   </form>
  )
};

export default AuthBtn;