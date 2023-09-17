import { useState } from "react";

const ForumsDropdown = ({list, setList}) => {
  const [activeItem, setActiveItem] = useState(1);

  const onClickSortByLatest = () => {
    setActiveItem(1);
    // list.forEach(element => {
    //   console.log(list);
    // });
  }

  const onClickSortByOldest = () => {
    setActiveItem(2);
  }

  const onClickSortByName = () => {
    setActiveItem(3);
  }

  return (
    <div className="dropdown">
      <button 
        type="button" 
        className="btn custom-btn dropdown-toggle" data-bs-toggle="dropdown" 
        aria-expanded="false">
          Filter By
      </button>
      <ul className="dropdown-menu">
        <li className={"dropdown-item " + (activeItem === 1 && "active")} onClick={onClickSortByLatest}>Latest</li>
        <li className={"dropdown-item " + (activeItem === 2 && "active")} onClick={onClickSortByOldest}>Oldest</li>
        <li className={"dropdown-item " + (activeItem === 3 && "active")} onClick={onClickSortByName}>Name</li>
      </ul>
    </div>
  )
}

export default ForumsDropdown