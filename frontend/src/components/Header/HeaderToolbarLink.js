import { Link } from 'react-router-dom';

const HeaderToolbarLink = (props) => {
  
  return (
    <li>
      <Link to={props.path} className={"nav-link px-2 "}>
        <h3>{props.title}</h3>
      </Link>
    </li>
  )
};

export default HeaderToolbarLink;