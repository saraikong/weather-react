import React from "react";
import "./CurrentTime.css";

export default function CurrentTime(props) {
  console.log(props.date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let amPM = "PM";
  switch (true) {
    case hours > 12:
      amPM = "PM";
      hours = hours - 12;
      break;
    case hours === 12:
      amPM = "PM";
      break;
    case hours < 12:
      amPM = "AM";
      break;
    case hours === 0:
      amPM = "AM";
      hours = hours + 12;
    default:
      hours = "Loading...";
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="CurrentTime col-md-2 pt-1">
      <h2 className="text-center">
        {day} {hours}:{minutes} {amPM}
      </h2>
    </div>
  );
}
