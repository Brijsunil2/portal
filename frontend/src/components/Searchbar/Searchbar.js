import "./Searchbar.css";
import { FaXmark } from "react-icons/fa6";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Searchbar = ({ submitFunc }) => {
  const [searchInput, setSearchInput] = useState("");

  const searchOnChange = (e) => {
    setSearchInput(e.target.value);
  };

  const clearSearch = (e) => {
    setSearchInput("");
  };

  const searchOnSubmit = async (e) => {
    e.preventDefault();
    const searchBar = document.querySelector("#forumSearch");
    searchBar.setAttribute("disabled", "");
    await submitFunc(searchBar.value);
    searchBar.removeAttribute("disabled");
  };

  return (
    <form className="searchbar d-flex" onSubmit={searchOnSubmit}>
      <input
        id="forumSearch"
        type="text"
        placeholder="Search"
        value={searchInput}
        onChange={searchOnChange}
      />
      {searchInput !== "" && <FaXmark className="clear-x" onClick={clearSearch}/>}
      <button type="submit">
        <AiOutlineSearch className="search-icon" />
      </button>
    </form>
  );
};

export default Searchbar;
