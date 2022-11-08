import React from "react";
import "./CurrentTime.css";

export default function CurrentTime(prop) {
  return (
    <div className="CurrentTime col-md-2 pt-1">
      <h2 className="text-center">
        {prop.day} {prop.time}
      </h2>
    </div>
  );
}
