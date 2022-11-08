import React from "react";
import "./MainWeatherIcon.css";

export default function MainWeatherIcon(prop) {
  return (
    <div className="MainWeatherIcon col-md">
      <div className="MainWeatherIcon pr-5 ">
        <img
          src={prop.icon}
          alt="Main weather icon"
          className="img-fluid icon-style border rounded wrapper-three shadow-sm"
        />
      </div>
    </div>
  );
}
