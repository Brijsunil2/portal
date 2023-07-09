import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Forumspage from "./pages/Forumspage/Forumspage";

const App = () => {
  const appTitle = "Portal";
  const paths = {
    Home: "/",
    Forums: "/forums",
    Calendar: "/calendar"
  };

  const dropdownItems = ["Settings", "Profile", "divider", "Sign out"];
  const defaultIconSrc = "https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-question-mark-vector-icon-png-image_963976.jpg";
  
  const [token, setToken] = useState(false);
  const [iconSrc, setIconSrc] = useState(defaultIconSrc);

  const loginOnClick = () => {
    setToken(true);
  }


  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.message));
  // }, []);

  return (
    <>
      <Header 
        appTitle={appTitle}
        paths={paths}
        iconSrc={iconSrc}
        dropdownItems={dropdownItems}
        hideDropdown={token}
      />
      <Routes>
        <Route index path={paths.Name} element={
          <Homepage loginOnClick={loginOnClick} token={token} />
        }/>
        <Route path={paths.Forums} element={
          <Forumspage />
        } />
        <Route path={ "*" } element={
          <Navigate to={paths.Name} />
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App;