import "./DropdownMenu.css";

import Button from "../Button/Button";

const DropdownMenu = ({ text, dropdownItems }) => {
  return (
    <div class="dropdown">
      {/* <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button> */}
      <button 
        type="button" 
        className="btn custom-btn dropdown-toggle" data-bs-toggle="dropdown" 
        aria-expanded="false">
          { text }
      </button>
      <ul class="dropdown-menu">
        {
          dropdownItems.map((dropdownItem, i) => <li key={i} class="dropdown-item">{dropdownItem}</li>)
        }
        {/* <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li> */}
      </ul>
    </div>
  );
};

export default DropdownMenu;