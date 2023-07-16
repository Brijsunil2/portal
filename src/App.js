import { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Forumspage from "./pages/Forumspage/Forumspage";
import Calendarpage from "./pages/Calandarpage/Calendarpage";

const App = () => {
  const appTitle = "Portal";
  const paths = {
    Home: "/",
    Forums: "/forums",
    Calendar: "/calendar"
  };
  
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState("Anonymous");

  const login = () => {
    
  }

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
        <Route path={paths.Calendar} element={
          <Calendarpage />
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