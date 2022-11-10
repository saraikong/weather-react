import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./FiveDayForecast.css";

export default function FiveDayForecast(prop) {
  function showMinMaxTemp() {
    console.log("hello");
    return (
      <div>
        <p>Min: 72</p>
        <p>Max: 92</p>
      </div>
    );
  }

  return (
    <div className="FiveDayForecast card shadow wrapper-two">
      <ul>
        <div>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n5">{prop.day}</p>
              <WeatherIcon icon={prop.icon} />
            </div>
          </li>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n2">{prop.day}</p>
              <WeatherIcon icon={prop.icon} />
            </div>
          </li>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n2">{prop.day}</p>
              <div onMouseOver={showMinMaxTemp}>
                <WeatherIcon icon={prop.icon} />
              </div>
            </div>
          </li>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n2">{prop.day}</p>
              <WeatherIcon icon={prop.icon} />
            </div>
          </li>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n2">{prop.day}</p>
              <WeatherIcon icon={prop.icon} />
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
}
