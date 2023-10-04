import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AppsListEntry = ({ appName, appIcon }) => {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/" + appName.toLowerCase());
  };

  return (
    <motion.div
      className="applistentry"
      onClick={routeChange}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {appIcon}
      <h3>{appName}</h3>
    </motion.div>
  );
};

export default AppsListEntry;
