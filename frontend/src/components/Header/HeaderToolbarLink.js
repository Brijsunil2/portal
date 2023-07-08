import { Link } from 'react-router-dom';

const HeaderToolbarLink = ({ toolbarLinkName, isActiveLink }) => {
  
  return (
    <li>
      <Link to={"./" + toolbarLinkName} className={"nav-link px-2 " + (isActiveLink && "active")}>
        <h3>{toolbarLinkName}</h3>
      </Link>
    </li>
  )
};

export default HeaderToolbarLink;