import "./AppsList.css"
import AppsListEntry from "./AppsListEntry";

const AppsList = ({ appNames }) => {
  return (
    <div className="container">
      { appNames.map(appName => <AppsListEntry appName={appName}/>) }
    </div>
  )
};

export default AppsList;