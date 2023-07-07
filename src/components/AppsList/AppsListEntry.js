import { useNavigate } from "react-router-dom";

const AppsListEntry = ({ appName }) => {
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate("/" + appName);
  };

  return (
    <div className="applistentry" onClick={routeChange}>{ appName }</div>
  );
};

export default AppsListEntry;