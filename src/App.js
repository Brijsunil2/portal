import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";

const App = () => {
  const appTitle = "Header";
  const toolbarLinkNames = ["Home", "Forums", "Calendar"];
  const dropdownItems = ["Settings", "Profile", "divider", "Sign out"];
  var iconSrc = "https://png.pngtree.com/png-vector/20190420/ourmid/pngtree-question-mark-vector-icon-png-image_963976.jpg";
  const [activeLinkIndex, setActiveLinkIndex] = useState(0);

  return (
    <>
      <Header 
        appTitle={appTitle}
        toolbarLinkNames={toolbarLinkNames} 
        activeLinkIndex={activeLinkIndex} 
        iconSrc={iconSrc}
        dropdownItems={dropdownItems}
      />
      <Homepage />
      <Footer />
    </>
  )
}

export default App;