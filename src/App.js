import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";

const App = () => {
  const toolbarLinkNames = ["Home", "Forums", "Calendar"];
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  return (
    <>
      <Header toolbarLinkNames={toolbarLinkNames} activeLinkIndex={activeLinkIndex} />
      <Homepage />
      <Footer />
    </>
  )
}

export default App;