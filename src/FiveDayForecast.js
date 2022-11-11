import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

import "./FiveDayForecast.css";
import axios from "axios";

export default function FiveDayForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
    console.log(response.data);
  }

  if (loaded) {
    return (
      <div className="FiveDayForecast card shadow wrapper-two">
        <ul>
          <div>
            <li>
              <div className="card-body pt-2 pb-0 mb-n2">
                <p className=" mb-n5">{props.day}</p>
                <WeatherIcon icon={forecast[0].weather[0].icon} />
              </div>
            </li>
            <li>
              <div className="card-body pt-2 pb-0 mb-n2">
                <p className=" mb-n2">{props.day}</p>
                <WeatherIcon icon={props.icon} />
              </div>
            </li>
            <li>
              <div className="card-body pt-2 pb-0 mb-n2">
                <p className=" mb-n2">{props.day}</p>
                <WeatherIcon icon={props.icon} />
              </div>
            </li>
            <li>
              <div className="card-body pt-2 pb-0 mb-n2">
                <p className=" mb-n2">{props.day}</p>
                <WeatherIcon icon={props.icon} />
              </div>
            </li>
            <li>
              <div className="card-body pt-2 pb-0 mb-n2">
                <p className=" mb-n2">{props.day}</p>
                <WeatherIcon icon={props.icon} />
              </div>
            </li>
          </div>
        </ul>
      </div>
    );
  } else {
    let apiKey = "197ef3a642b76eef90e131866f74a0a0";
    let units = "imperial";
    let longitude = props.longitude;
    let latitude = props.latitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
