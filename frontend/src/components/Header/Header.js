import HeaderToolbar from "./HeaderToolbar";
import IconDropdown from "../IconDropdown/IconDropdown";

const Header = (props) => {
  
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 mb-4 border-bottom">
      <div className="mb-2 mb-md-0">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <h1>{props.appTitle}</h1>
        </a>
      </div>

      <HeaderToolbar 
        paths={props.paths}
      />

      <IconDropdown iconSrc={props.iconSrc} dropdownItems={props.dropdownItems} hideDropdown={props.hideDropdown}/>
    </header>
  )
}

export default Header;