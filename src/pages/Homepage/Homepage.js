import "./Homepage.css";
import Section from "../../components/Section/Section";
import SectionHeader from "../../components/Section/SectionHeader";
import AppsList from "../../components/AppsList/AppsList";
import DateTimeSection from "../../components/DateTimeSection/DateTimeSection";
import WeatherView from "../../components/WeatherView/WeatherView";
import AuthSection from "../../components/AuthSection/AuthSection";

const Homepage = ({onSigninClick, token}) => {
  const appNames = ["Forums", "Calendar"];

  return (
    <div className="container homepage-container">
      {
        token ? (
          <Section 
            sectionName={"apps-container"} 
            content={<AppsList appNames={appNames} />}
            backgroundColor={"white"}
            header={
              <SectionHeader 
                headerName={ "Apps" } 
                headerColor={"#788BFF"} 
              />
            }
          />
        ) : (
          <Section 
            sectionName={"apps-container"} 
            content={<AuthSection onSigninClick={onSigninClick} />}
            backgroundColor={"white"}
            header={
              <SectionHeader 
                headerName={ "Sign in | Sign up" } 
                headerColor={"#788BFF"} 
              />
            }
          />
        )
      }
      <Section 
        sectionName={"date-container"} 
        content={<DateTimeSection />}
        backgroundColor={"white"}
      />
      <Section 
        sectionName={"weather-container"} 
        content={<WeatherView />}
        backgroundColor={"white"}
      />
    </div>
  )
}

export default Homepage;