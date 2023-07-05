import "./Homepage.css";
import Section from "../../components/Section/Section";
import AppsList from "../../components/AppsList/AppsList";
import DateTimeSection from "../../components/DateTimeSection/DateTimeSection";
import WeatherView from "../../components/WeatherView/WeatherView";
import AuthSection from "../../components/AuthSection/AuthSection";

const Homepage = ({loginOnClick, token}) => {
  const appNames = ["Forums", "Calendar"];

  return (
    <div className="container homepage-container">
      {
        token ? (
          <Section 
            headerName="Apps" 
            sectionName={"apps-container"} 
            content={<AppsList appNames={appNames} />}
            headerColor={"#788BFF"}
          />
        ) : (
          <Section 
            headerName="Sign in | Sign up" 
            sectionName={"apps-container"} 
            content={<AuthSection loginOnClick={loginOnClick} />}
            headerColor={"#788BFF"}
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