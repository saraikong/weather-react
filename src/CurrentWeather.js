import React from "react";

import "./CurrentWeather.css";

export default function CurrentWeather(prop) {
  return (
    <div className="CurrentWeather col-12">
      <ul>
        <li className="main-temperature pt-5">
          <ul>
            <li>{prop.temperature}° F</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>{prop.weatherDescription}</li>
            <li>Humidity: {prop.humidity}%</li>
            <li>Wind: {prop.wind} mph</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
