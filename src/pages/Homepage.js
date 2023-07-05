import "./Homepage.css";
import { useState } from "react";
import Section from "../components/Section/Section";
import AppsList from "../components/AppsList/AppsList";
import DateTimeSection from "../components/DateTimeSection/DateTimeSection";
import WeatherView from "../components/WeatherView/WeatherView";
import AuthSection from "../components/AuthSection/AuthSection";

const Homepage = () => {
  const appNames = ["Forums", "Calendar"];
  const [token, setToken] = useState();

  return (
    <div className="container homepage-container">
      {
        token ? (
          <Section 
            headerName="Apps" 
            sectionName={"apps-container"} 
            content={<AppsList appNames={appNames} />}
          />
        ) : (
          <Section 
            headerName="Apps" 
            sectionName={"apps-container"} 
            content={<AuthSection />}
          />
        )
      }
      <Section 
        sectionName={"date-container"} 
        content={<DateTimeSection />}
      />
      <Section 
        sectionName={"weather-container"} 
        content={<WeatherView />}
      />
    </div>
  )
}

export default Homepage;