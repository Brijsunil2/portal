import "./AppsList.css"
import AppsListEntry from "./AppsListEntry";

const AppsList = ({ appNames }) => {
  return (
    <div className="container">
      { appNames.map((appName, i) => <AppsListEntry key={i} appName={appName}/>) }
    </div>
  )
};

export default AppsList;