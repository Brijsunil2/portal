import "./Homepage.css";
import Section from "../components/Section/Section";
import AppsList from "../components/AppsList/AppsList";
import DateTimeSection from "../components/DateTimeSection/DateTimeSection";

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
        content={<DateTimeSection />}
      />
      <Section 
        sectionName={"weather-container"} 
        // content={}
      />
    </div>
  )
}

export default Homepage;