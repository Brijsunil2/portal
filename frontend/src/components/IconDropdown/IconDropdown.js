import IconDropdownItem from "./IconDropdownItem";

const IconDropdown = ({iconSrc, dropdownItems}) => {
  return (
    <div className="dropdown">
      <a href="#" className="d-block link-body-emphasis text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={iconSrc} alt="question mark" width="40" height="40" className="rounded-circle" />
      </a>
      <ul className="dropdown-menu text-small" >
        {
          dropdownItems.map((dropdownItem, i) => 
            <IconDropdownItem key={i} dropdownItem={dropdownItem} />
          )
        }
        {/* <li><a className="dropdown-item" href="./">Settings</a></li>
        <li><a className="dropdown-item" href="./">Profile</a></li>
        <li><hr className="dropdown-divider" /></li>
        <li><a className="dropdown-item" href="./">Sign out</a></li> */}
      </ul>
    </div>
  )
}

export default IconDropdown