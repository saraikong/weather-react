import React, { useState } from "react";

import "./CurrentWeather.css";

export default function CurrentWeather(prop) {
  const [unit, setUnit] = useState("fahrenheit");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div className="CurrentWeather col-12">
        <ul>
          <li className="main-temperature pt-5">
            <ul>
              <li>
                {prop.temperature}°{" "}
                <a href="/" onClick={showCelsius}>
                  F
                </a>
              </li>
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
  } else {
    let celsius = Math.round(((prop.temperature - 32) * 5) / 9);
    return (
      <div className="CurrentWeather col-12">
        <ul>
          <li className="main-temperature pt-5">
            <ul>
              <li>
                {celsius}°{" "}
                <a href="/" onClick={showFahrenheit}>
                  C
                </a>
              </li>
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
}
