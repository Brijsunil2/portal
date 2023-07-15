import { useEffect, useState } from "react";
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
  
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Header 
        appTitle={appTitle}
        paths={paths}
        isAuth={isAuth}
      />
      <Routes>
        <Route index path={paths.Name} element={
          <Homepage token={isAuth} />
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
  );
};

export default App;