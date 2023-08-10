const IconDropdownItem = ({ title, onClickFunc }) => {
  return (
    <li onClick={onClickFunc}>
      {
        title !== "divider" ?
        <a className="dropdown-item" href="./">{title}</a> :
        <hr className="dropdown-divider" />
      }
    </li>
  )
}

export default IconDropdownItem;