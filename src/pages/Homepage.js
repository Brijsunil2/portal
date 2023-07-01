import "./Homepage.css";
import AppsList from "../components/AppsList/AppsList";

const Homepage = () => {
  const appNames = ["Forums", "Calendar"];

  return (
    <div className="container homepage-container">
      <AppsList appNames={appNames} />
      <div className="date-container background-container"></div>
      <div className="weather-container background-container"></div>
    </div>
  )
}

export default Homepage;