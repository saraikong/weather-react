import React from "react";

import MainTitle from "./MainTitle";
import CurrentTime from "./CurrentTime";
import SearchBar from "./SearchBar";
import CurrentCityButton from "./CurrentCityButton";
import MainWeatherIcon from "./MainWeatherIcon";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import FiveDayForecast from "./FiveDayForecast";

import "./Weather.css";

let weatherData = {
  city: "Minneapolis, MN",
  day: "Thursday",
  time: "9:57 PM",
  temperature: 58,
  weatherDescription: "partly cloudy",
  humidity: 80,
  wind: 3,
  icon: "/icons/cloudy-day.svg",
};

export default function Weather() {
  return (
    <div className="Weather">
      <div className="border rounded m-5 shadow wrapper">
        <div className="row">
          <div className="col  ml-5 ">
            <div className="row mt-4">
              <MainTitle city={weatherData.city} />
              <CurrentTime day={weatherData.day} time={weatherData.time} />
              <div className="col-md-4">
                <SearchBar />
                <CurrentCityButton />
              </div>
            </div>
            <div className="row">
              <MainWeatherIcon icon={weatherData.icon} />
              <div className=" col">
                <CurrentWeather
                  temperature={weatherData.temperature}
                  weatherDescription={weatherData.weatherDescription}
                  humidity={weatherData.humidity}
                  wind={weatherData.wind}
                />
              </div>
            </div>
            <br />
            <HourlyForecast
              time={weatherData.time}
              temperature={weatherData.temperature}
              icon={weatherData.icon}
            />
          </div>

          <div className="col-3 mt-2 mb-2 ml-2 mr-3">
            <FiveDayForecast day={weatherData.day} icon={weatherData.icon} />
          </div>
        </div>
      </div>
      <div className="text-white text-left pl-5 mt-n4">
        <a
          href="https://github.com/saraikong/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Sarai Kong
      </div>
    </div>
  );
}
