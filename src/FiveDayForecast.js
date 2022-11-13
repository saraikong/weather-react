import React, { useState, useEffect } from "react";

import WeatherForecastDay from "./WeatherForecastDay";

import "./FiveDayForecast.css";
import axios from "axios";

export default function FiveDayForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="FiveDayForecast card shadow ">
        <ul className="mb-5">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6 && index > 0) {
              return (
                <div key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    );
  } else {
    let apiKey = "d1a86552de255334f6117b348c4519bd";
    let units = "imperial";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
