import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastHour() {
  return (
    <div className="WeatherForecastHour">
      <div className="col ">
        <div className="row ">
          <div className="col-12">
            <ul>
              <li>12:56 PM</li>
              <li className="pt-2">72°F</li>
              <li className="pt-4">
                <WeatherIcon icon="01n" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
