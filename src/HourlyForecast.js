import React, { useState, useEffect } from "react";
import axios from "axios";

import "./HourlyForecast.css";
import WeatherForecastHour from "./WeatherForecastHour";

export default function HourlyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  let [minutes, setMinutes] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.hourly);
    setMinutes(response.data.minutely[0]);
  }
  if (loaded) {
    return (
      <div className="HourlyForecast row mt-4 border rounded pt-2 shadow-sm mb-4 ps-0">
        {forecast.map(function (fiveHourForecast, index) {
          if (index < 6 && index > 0) {
            return (
              <div key={index} className="col">
                <WeatherForecastHour
                  data={fiveHourForecast}
                  minutes={minutes}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "d1a86552de255334f6117b348c4519bd";
    let units = "imperial";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
