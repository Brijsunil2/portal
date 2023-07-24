import { useLocalStorage } from "./utilities/localStoargeUtil";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import Forumspage from "./pages/Forumspage/Forumspage";
import Calendarpage from "./pages/Calandarpage/Calendarpage";

const App = () => {
  const [user, setUser] = useLocalStorage("user", null);;
  const appTitle = "Portal";
  const paths = {
    Home: "/",
    Forums: "/forums",
    Calendar: "/calendar"
  };

  return (
    <>
      <Header 
        appTitle={appTitle}
        paths={paths}
      />
      <Routes>
        <Route index path={paths.Name} element={
          <Homepage user={user} setUser={setUser}/>
        }/>
        <Route path={paths.Forums} element={
          <Forumspage user={user} />
        } />
        <Route path={paths.Calendar} element={
          <Calendarpage />
        } />
        <Route path={ "*" } element={
          <Navigate to={paths.Home} />
        } />
      </Routes>
      <Footer />
    </>
  );
};

export default App;