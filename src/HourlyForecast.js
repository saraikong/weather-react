import React from "react";

import "./HourlyForecast.css";

export default function HourlyForecast(prop) {
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
