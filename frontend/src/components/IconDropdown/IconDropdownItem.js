const IconDropdownItem = ({ dropdownItem }) => {
  return (
    <li>
      {
        dropdownItem !== "divider" ?
        <a className="dropdown-item" href="./">{dropdownItem}</a> :
        <hr className="dropdown-divider" />
      }
    </li>
  )
}

export default IconDropdownItem;