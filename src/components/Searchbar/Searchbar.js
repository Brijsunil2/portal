import "./Searchbar.css";

import { AiOutlineSearch } from "react-icons/ai";

const Searchbar = () => {
  return (
    <div className="searchbar d-flex">
      <AiOutlineSearch className="search-icon"/>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default Searchbar;