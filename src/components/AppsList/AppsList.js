import "./AppsList.css"
import AppsListEntry from "./AppsListEntry";

const AppsList = ({ appNames }) => {
  return (
    <div className="apps-container background-container">
      <div className="section-header">
        <h2>Apps</h2>
      </div>
      <div className="container">
        { appNames.map(appName => <AppsListEntry appName={appName}/>) }
      </div>
    </div>
  )
};

export default AppsList;