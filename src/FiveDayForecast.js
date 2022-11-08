import React from "react";

import "./FiveDayForecast.css";

export default function FiveDayForecast(prop) {
  return (
    <div className="FiveDayForecast card shadow wrapper-two">
      <ul>
        <div>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n2">{prop.day}</p>
              <img
                src={prop.icon}
                alt="Sidebar weather icon"
                className="img-fluid icon-style mt-n3"
              />
            </div>
          </li>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n2">{prop.day}</p>
              <img
                src={prop.icon}
                alt="Sidebar weather icon"
                className="img-fluid icon-style mt-n3"
              />
            </div>
          </li>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n2">{prop.day}</p>
              <img
                src={prop.icon}
                alt="Sidebar weather icon"
                className="img-fluid icon-style mt-n3"
              />
            </div>
          </li>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n2">{prop.day}</p>
              <img
                src={prop.icon}
                alt="Sidebar weather icon"
                className="img-fluid icon-style mt-n3"
              />
            </div>
          </li>
          <li>
            <div className="card-body pt-2 pb-0 mb-n2">
              <p className=" mb-n2">{prop.day}</p>
              <img
                src={prop.icon}
                alt="Sidebar weather icon"
                className="img-fluid icon-style mt-n3"
              />
            </div>
          </li>
        </div>
      </ul>
    </div>
  );
}
