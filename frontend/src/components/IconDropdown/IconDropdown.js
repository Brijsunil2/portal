import IconDropdownItem from "./IconDropdownItem";
import { useState } from "react";

const IconDropdown = ({iconSrc, isAuth}) => {
  const [icon, setIcon] = useState(iconSrc ? iconSrc : require('../../assets/question.png'));

  const logoutOnClick = () => {
    window.localStorage.setItem("user", null);
    window.location.reload();
  }

  return (
    <div className="dropdown">
      <a href="#" className="d-block link-body-emphasis text-decoration-none" data-bs-toggle={isAuth ? "dropdown" : ""} aria-expanded="false">
        <img src={icon} alt="User icon" width="40" height="40" className="rounded-circle" />
      </a>
      {

        <ul className="dropdown-menu text-small" >
        {
          isAuth && (
            <IconDropdownItem key="1" title="Logout" onClickFunc={logoutOnClick} />
          )
        }
      </ul>
      }
    </div>
  )
}

export default IconDropdown;