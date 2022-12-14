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
      coordinates: response.data.coord,
    });
  }

  function search() {
    const apiKey = "d1a86552de255334f6117b348c4519bd";
    let units = "imperial";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather container">
        <div className="border rounded m-5 shadow  ">
          <div className="wrapper row">
            <div className="col  ml-5 ">
              <div className="row mt-4">
                <MainTitle city={weatherData.city} />
                <CurrentTime date={weatherData.date} time={weatherData.time} />
                <div className="col-md-4">
                  <SearchBar setCity={setCity} search={search} />
                  <CurrentCityButton setCity={setCity} search={search} />
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

              <div className="pt-4 ps-n5 ms-n5">
                <HourlyForecast
                  icon={weatherData.icon}
                  coordinates={weatherData.coordinates}
                />
              </div>
            </div>

            <div className="col-3 mt-2 mb-2 ml-2 mr-3">
              <FiveDayForecast
                day={weatherData.day}
                icon={weatherData.icon}
                coordinates={weatherData.coordinates}
              />
            </div>
          </div>
        </div>
        <div className="text-white text-left pl-5 mt-n4">
          This project was coded by Sarai Kong and is{" "}
          <a
            href="https://github.com/saraikong/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://magical-capybara-e3b566.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </div>
      </div>
    );
  } else {
    search();

    return <h1>Loading...</h1>;
  }
}
