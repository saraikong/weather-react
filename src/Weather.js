import React, { useState } from "react";

import MainTitle from "./MainTitle";
import CurrentTime from "./CurrentTime";
import SearchBar from "./SearchBar";
import CurrentCityButton from "./CurrentCityButton";
import WeatherIcon from "./WeatherIcon";
import CurrentWeather from "./CurrentWeather";
import HourlyForecast from "./HourlyForecast";
import FiveDayForecast from "./FiveDayForecast";

import "./Weather.css";

import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      day: "Thursday",
      time: "9:57 PM",
      temperature: Math.round(response.data.main.temp),
      weatherDescription: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
    });
  }

  function search() {
    const apiKey = "197ef3a642b76eef90e131866f74a0a0";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather ">
        <div className="border rounded m-5 shadow wrapper">
          <div className="row">
            <div className="col  ml-5 ">
              <div className="row mt-4">
                <MainTitle city={weatherData.city} />
                <CurrentTime date={weatherData.date} time={weatherData.time} />
                <div className="col-md-4">
                  <SearchBar setCity={setCity} search={search} city={city} />
                  <CurrentCityButton />
                </div>
              </div>
              <div className="row">
                <div className="MainWeatherIcon col-md">
                  <div className="MainWeatherIcon pr-5">
                    <WeatherIcon
                      icon={weatherData.icon}
                      alt={weatherData.weatherDescription}
                    />
                  </div>
                </div>
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
              <FiveDayForecast
                day={weatherData.day}
                icon={weatherData.icon}
                latitude={weatherData.latitude}
                longitude={weatherData.longitude}
              />
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
    search();

    return <h1>Loading...</h1>;
  }
}
