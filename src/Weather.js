import React, { useState } from "react";

import MainTitle from "./MainTitle";
import CurrentTime from "./CurrentTime";
import SearchBar from "./SearchBar";
import CurrentCityButton from "./CurrentCityButton";
import MainWeatherIcon from "./MainWeatherIcon";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import FiveDayForecast from "./FiveDayForecast";

import "./Weather.css";

import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      ready: true,
      city: response.data.name,
      day: "Thursday",
      time: "9:57 PM",
      temperature: Math.round(response.data.main.temp),
      weatherDescription: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: "/icons/cloudy-day.svg",
    });
  }

  if (weatherData.ready) {
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
  } else {
    const apiKey = "9fc865e012a4a6fe2c8d7eeeea36dcf2";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return <h1>Loading...</h1>;
  }
}
