import React from "react";

import "./FiveDayForecast.css";

export default function FiveDayForecast(prop) {
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
    <div className="FiveDayForecast card shadow wrapper-two">
      <ul>
        <div>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n2">{prop.day}</p>
              <img
                src={prop.icon}
                alt="Sidebar weather icon"
                className="img-fluid icon-style mt-n3"
              />
            </div>
          </li>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n2">{prop.day}</p>
              <img
                src={prop.icon}
                alt="Sidebar weather icon"
                className="img-fluid icon-style mt-n3"
              />
            </div>
          </li>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n2">{prop.day}</p>
              <img
                src={prop.icon}
                alt="Sidebar weather icon"
                className="img-fluid icon-style mt-n3"
              />
            </div>
          </li>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n2">{prop.day}</p>
              <img
                src={prop.icon}
                alt="Sidebar weather icon"
                className="img-fluid icon-style mt-n3"
              />
            </div>
          </li>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n2">{prop.day}</p>
              <img
                src={prop.icon}
                alt="Sidebar weather icon"
                className="img-fluid icon-style mt-n3"
              />
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
}
