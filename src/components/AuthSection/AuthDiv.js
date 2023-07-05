const AuthDiv = ({text}) => {
  return (
    <div className="d-flex px-4">
      <hr className="my-auto flex-grow-1"/>
      <div className="px-4">{text}</div>
      <hr className="my-auto flex-grow-1"/>
    </div>
  )
};

export default AuthDiv;