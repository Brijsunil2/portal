import "./ForumsSection.css";

import { useState } from "react";
import forumsData from "../../temp/forumsData";
import ForumsListItem from "./ForumsListItem";
import Searchbar from "../Searchbar/Searchbar";
import Button from "../Button/Button";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

const ForumsSection = () => {
  const dropdownItems = ["Latest", "Oldest" , "Name"];
  const [dataset, setDataset] = useState(forumsData);

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
        {
          dataset.map(data => {
            return <ForumsListItem key={data.id} data={data} />
          })
        }
      </div>
    </>
  );
};

export default ForumsSection;