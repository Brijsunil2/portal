import "./Button.css";

const Button = ({ text }) => {
  return (
    <button type="button" className="btn custom-btn">{ text }</button>
  )
}

export default Button