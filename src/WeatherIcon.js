import React from "react";

export default function WeatherIcon(prop) {
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
    "11n": "/icons/thunder.svg",
    "13d": "/icons/snowy.svg",
    "13n": "/icons/snowy.svg",
  };

  return (
    <div className="WeatherIcon pr-5 ">
      <img
        src={codeMapping[prop.icon]}
        alt={prop.alt}
        className="img-fluid  "
      />
    </div>
  );
}
