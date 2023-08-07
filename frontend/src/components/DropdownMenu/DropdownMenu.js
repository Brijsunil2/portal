import "./DropdownMenu.css";

const DropdownMenu = ({ text, dropdownItems }) => {
  return (
    <div className="dropdown">
      <button 
        type="button" 
        className="btn custom-btn dropdown-toggle" data-bs-toggle="dropdown" 
        aria-expanded="false">
          { text }
      </button>
      <ul className="dropdown-menu">
        {
          dropdownItems.map((dropdownItem, i) => <li key={i} className="dropdown-item">{dropdownItem}</li>)
        }
      </ul>
    </div>
  );
};

export default DropdownMenu;