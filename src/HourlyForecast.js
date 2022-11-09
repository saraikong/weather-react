import React from "react";

import "./HourlyForecast.css";

export default function HourlyForecast(prop) {
  const codeMapping = {
    "09d": "/icons/rainy.svg",
    "09n": "/icons/rainy.svg",
    "10d": "/icons/rainy.svg",
    "10n": "/icons/rainy.svg",
    "01d": "/icons/day.svg",
    "01n": "/icons/night.svg",
    "02d": "/icons/cloudy-day.svg",
    "02n": "/icons/cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/cloudy.svg",
    "04n": "/icons/cloudy.svg",
    "50d": "/icons/cloudy.svg",
    "50n": "/icons/cloudy.svg",
    "11d": "/icons/thunder.svg",
    "11d": "/icons/thunder.svg",
    "13d": "/icons/snowy.svg",
    "13n": "/icons/snowy.svg",
  };

  return (
    <div className="HourlyForecast row mt-4 border rounded pt-2 shadow-sm mb-4">
      <div className="col ">
        <div className="row ">
          <div className="col-12">
            <ul>
              <li>{prop.time}</li>
              <li className="pt-2">{prop.temperature}°F</li>
              <li className="pt-4">
                <img
                  src={prop.icon}
                  alt="Hourly forecast weather icon"
                  className="img-fluid icon-style mt-n4 mb-n3 ml-2"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col ">
        <div className="row ">
          <div className="col-12">
            <ul>
              <li>{prop.time}</li>
              <li className="pt-2">{prop.temperature}°F</li>
              <li className="pt-4">
                <img
                  src={prop.icon}
                  alt="Hourly forecast weather icon"
                  className="img-fluid icon-style mt-n4 mb-n3 ml-2"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col ">
        <div className="row ">
          <div className="col-12">
            <ul>
              <li>{prop.time}</li>
              <li className="pt-2">{prop.temperature}°F</li>
              <li className="pt-4">
                <img
                  src={prop.icon}
                  alt="Hourly forecast weather icon"
                  className="img-fluid icon-style mt-n4 mb-n3 ml-2"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col ">
        <div className="row ">
          <div className="col-12">
            <ul>
              <li>{prop.time}</li>
              <li className="pt-2">{prop.temperature}°F</li>
              <li className="pt-4">
                <img
                  src={prop.icon}
                  alt="Hourly forecast weather icon"
                  className="img-fluid icon-style mt-n4 mb-n3 ml-2"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col ">
        <div className="row ">
          <div className="col-12">
            <ul>
              <li>{prop.time}</li>
              <li className="pt-2">{prop.temperature}°F</li>
              <li className="pt-4">
                <img
                  src={prop.icon}
                  alt="Hourly forecast weather icon"
                  className="img-fluid icon-style mt-n4 mb-n3 ml-2"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
