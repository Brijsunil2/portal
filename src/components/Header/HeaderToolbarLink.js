const HeaderToolbarLink = ({ toolbarLinkName, isActiveLink }) => {
  
  return (
    <li>
      <a href="./" className={"nav-link px-2 " + (isActiveLink && "active")}>
        <h3>{toolbarLinkName}</h3>
      </a>
    </li>
  )
};

export default HeaderToolbarLink;