import React from "react";

export default function WeatherForecastDay() {
  return (
    <li>
      <div className="card-body pt-2 pb-0 mb-n2">
        <p className=" mb-n5">{props.day}</p>
        <WeatherIcon icon={forecast[0].weather[0].icon} />
      </div>
    </li>
  );
}
