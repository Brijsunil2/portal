import "./Homepage.css";
import Section from "../components/Section/Section";
import AppsList from "../components/AppsList/AppsList";
import DateTimeSection from "../components/DateTimeSection/DateTimeSection";
import WeatherView from "../components/WeatherView/WeatherView";

const Homepage = () => {
  const appNames = ["Forums", "Calendar"];

  return (
    <div className="container homepage-container">
      <Section 
        headerName="Apps" 
        sectionName={"apps-container"} 
        content={<AppsList appNames={appNames} />}
      />
      <Section 
        sectionName={"date-container"} 
        content={<DateTimeSection />}
      />
      <Section 
        headerName="Weather" 
        sectionName={"weather-container"} 
        content={<WeatherView />}
      />
    </div>
  )
}

export default Homepage;