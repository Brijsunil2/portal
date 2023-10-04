import "./AppsList.css"
import AppsListEntry from "./AppsListEntry";
import { MdForum } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/bs";

const AppsList = () => {
  return (
    <div className="container applist-container">
      <div className="row">
        <div className="col">
          <AppsListEntry appName="Forums" appIcon={<MdForum />}/>
        </div>
        <div className="col">
          <AppsListEntry appName="Calendar" appIcon={<BsCalendarEvent />}/>
        </div>
      </div>
    </div>
  )
};

export default AppsList;