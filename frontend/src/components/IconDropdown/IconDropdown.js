import IconDropdownItem from "./IconDropdownItem";

const IconDropdown = ({iconSrc, dropdownItems, hideDropdown}) => {
  return (
    <div className="dropdown">
      <a href="#" className="d-block link-body-emphasis text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={iconSrc} alt="question mark" width="40" height="40" className="rounded-circle" />
      </a>
      {

        <ul className="dropdown-menu text-small" >
        {
          hideDropdown &&
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