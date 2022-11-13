import React from "react";
import axios from "axios";

export default function CurrentCityButton(props) {
  function handleResponse(response) {
    console.log(response);
    props.setCity(response.data.name);
    props.search();
  }

  function handleClick(event) {
    event.preventDefault();

    function currentCity(location) {
      let apiKey = "197ef3a642b76eef90e131866f74a0a0";
      let units = "imperial";
      let longitude = location.coords.longitude;
      let latitude = location.coords.latitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(handleResponse);

      console.log(apiUrl);
    }

    navigator.geolocation.getCurrentPosition(currentCity);
  }

  return (
    <div className="CurrentCityButton">
      <button
        type="button"
        className="btn btn-outline-primary ml-4 pt-0 pb-0 pr-5 pl-5 d-block"
        onClick={handleClick}
      >
        Current city
      </button>
    </div>
  );
}
