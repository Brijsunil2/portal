import "./Homepage.css";
import AppsList from "../components/AppsList/AppsList";
import Section from "../components/Section/Section";

const Homepage = () => {
  const appNames = ["Forums", "Calendar"];

  return (
    <div className="container homepage-container">
      <Section 
        headerName="App" 
        sectionName={"apps-container"} 
        content={<AppsList appNames={appNames} />}
      />
      <Section 
        sectionName={"date-container"} 
        // content={}
      />
      <Section 
        sectionName={"weather-container"} 
        // content={}
      />
    </div>
  )
}

export default Homepage;