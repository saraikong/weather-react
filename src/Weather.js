import axios from "axios";
import React from "react";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(`The weather in Paris is ${response.data.main.temp}° C`);
  }

  let apiKey = "9fc865e012a4a6fe2c8d7eeeea36dcf2";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <h2>Hello from Weather</h2>;
}
