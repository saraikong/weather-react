import React from "react";
import "./MainTitle.css";

export default function MainTitle(prop) {
  return (
    <div className="MainTitle col-md-6">
      <h1 className="heading-size text-center">
        Current Weather in {prop.city}
      </h1>
    </div>
  );
}
