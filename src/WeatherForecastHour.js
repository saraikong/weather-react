import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastHour(props) {
  let temperature = Math.round(props.data.temp);
  let date = new Date(props.data.dt * 1000);
  let amPm = "";
  let hour = date.getHours();

  if (hour > 12) {
    amPm = "PM";
    hour = hour - 12;
  } else {
    if (hour === 12) {
      amPm = "PM";
    } else {
      if (hour < 12 && hour > 0) {
        amPm = "AM";
      } else {
        if (hour === 0) {
          hour = hour + 12;
          amPm = "AM";
        }
      }
    }
  }

  let minuteData = new Date(props.minutes.dt * 1000);
  let minutes = minuteData.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="WeatherForecastHour">
      <div className="row ">
        <div className="col-12">
          <ul>
            <li>
              {hour}:{minutes} {amPm}
            </li>
            <li className="pt-2">{temperature} °F</li>
            <li className="pt-4">
              <WeatherIcon icon={props.data.weather[0].icon} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
