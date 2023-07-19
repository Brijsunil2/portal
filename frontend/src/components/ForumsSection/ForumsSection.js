import "./ForumsSection.css";
import formData from "../../db";
import { useState } from "react";
import ForumsListItem from "./ForumsListItem";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const ForumsSection = () => {
  const [forums, setForums] = useState(formData.forums);
  const dropdownItems = ["Latest", "Oldest" , "Name"];

  return (
    <>
      <div className="container">
        <div className="forum-interact-bar row">
          <div className="col-md">
            <Searchbar />
          </div>
          <div className="col-md d-flex justify-content-end">
            <Button text="Create Forum" />
            <DropdownMenu text="Filter By" dropdownItems={dropdownItems}/>
          </div>
        </div>
      </div>
      <div className='container forumslist-container'>
        {/* {
          forums.map(forum => {
            return <ForumsListItem key={forum.id} data={forum} />
          })
        } */}
      </div>
    </>
  );
};

export default ForumsSection;