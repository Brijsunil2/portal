import "./WeatherView.css";

import { useState, useEffect, useRef } from "react";
import findLocation from "../../utilities/findLocation";

const kelvinToCelsius = kelvinTemp => (kelvinTemp - 273.15);

const WeatherView = () => {
  const init = useRef(false);
  const [weather, setWeather] = useState();
  
  useEffect(() => {
    if (!init.current) {
      findLocation().then(async (location) => {
        const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`;
    
        const res = await fetch(weatherURL);
        const jsonData = await res.json();
        setWeather(jsonData);
      });
    }

    return () => init.current = true;
  }, []);

  return (
    <>
      {
        weather ? (
          <div className="container weather-content-container text-center">
            <div className="row row-cols-2">
              <div className="col">
                <p className="weather-header">
                  {weather.weather[0].main}
                </p>
              </div>
              <div className="col"></div>
              <div className="col">
                <img 
                  className="weather-img"
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                  alt={weather.weather[0].description + " image"}
                />
              </div>
              <div className="col">
                <p className="weather-temp">
                    {Math.round(kelvinToCelsius(weather.main.temp)) + "\u00B0C"}
                  </p>
                <p className="weather-info">
                  {"Feels Like: " + Math.round(kelvinToCelsius(weather.main.feels_like)) + "\u00B0C"}
                </p>
                <p className="weather-info">
                  {"Low: " + Math.round(kelvinToCelsius(weather.main.temp_min)) + "\u00B0C"}
                </p>
                <p className="weather-info">
                  {"High: " + Math.round(kelvinToCelsius(weather.main.temp_max)) + "\u00B0C"}
                </p>
              </div>
              <div className="col">
                <p className="weather-info">
                  {weather.weather[0].description}</p>
              </div>
              <div className="col">
                <p className="weather-info">
                  {"Humidity: " + weather.main.humidity + "%"}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="weather-content-container d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status"></div>
          </div>
        )
      }
    </>
  )
}

export default WeatherView;