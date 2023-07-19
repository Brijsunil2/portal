import { useNavigate } from "react-router-dom";

const AppsListEntry = ({ appName }) => {
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate("/" + appName.toLowerCase());
  };

  return (
    <div className="applistentry" onClick={routeChange}>{ appName }</div>
  );
};

export default AppsListEntry;