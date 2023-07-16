import IconDropdownItem from "./IconDropdownItem";
import { useState } from "react";

const IconDropdown = ({iconSrc, showDropdown}) => {
  const dropdownItems = ["Settings", "Profile", "divider", "Sign out"];
  const [icon, setIcon] = useState(iconSrc ? iconSrc : require('../../assets/question.png'));


  return (
    <div className="dropdown">
      <a href="#" className="d-block link-body-emphasis text-decoration-none" data-bs-toggle={showDropdown ? "dropdown" : ""} aria-expanded="false">
        <img src={icon} alt="User icon" width="40" height="40" className="rounded-circle" />
      </a>
      {

        <ul className="dropdown-menu text-small" >
        {
          showDropdown &&
          dropdownItems.map((dropdownItem, i) => 
            <IconDropdownItem key={i} dropdownItem={dropdownItem} />
          )
        }
      </ul>
      }
    </div>
  )
}

export default IconDropdown