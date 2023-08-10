import { useLocalStorage } from "./utilities/localStoargeUtil";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Forumspage from "./pages/Forumspage/Forumspage";
import Calendarpage from "./pages/Calandarpage/Calendarpage";
import Forumpage from "./pages/Forumpage/Forumpage";

import socketIO from "socket.io-client";
const socket = socketIO.connect("http://localhost:4000");

const App = () => {
  const [user, setUser] = useLocalStorage("user", null);
  const [isAuth, setIsAuth] = useState(false);
  const [paths, setPaths] = useState({Home: "/"});
  const appTitle = "Portal";

  useEffect(() => {
    if(!isAuth) {
      if (user && user.isAuth) {
        setIsAuth(true);
        setPaths({...paths, Forums: "/forums", Calendar: "/calendar"});
      } 
    }

  }, [user, isAuth, paths]);

  return (
    <>
      <Header 
        appTitle={appTitle}
        paths={paths}
      />
      <Routes>
        <Route index path={paths.Name} element={
          <Homepage user={user} setUser={setUser} isAuth={isAuth} socket={socket} />
        }/>
        {
          isAuth && <>
            <Route path={paths.Forums} element={
              <Forumspage user={user} />
            } />
            <Route path={"/forum/:id"} element={
              <Forumpage socket={socket} user={user} />
            } />
            <Route path={paths.Calendar} element={
              <Calendarpage />
            } />
          </>
        }
        <Route path="*" element={
          <Navigate to={paths.Home} />
        } />
      </Routes>
      <Footer />
    </>
  );
};

export default App;