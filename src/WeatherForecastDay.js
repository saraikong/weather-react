import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  console.log(props);
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <li>
        <div className="card-body pt-1 pb-0 mb-n2">
          <p className=" mt-3 mb-2">{day()}</p>
          <WeatherIcon icon={props.data.weather[0].icon} />
        </div>
      </li>
    </div>
  );
}
