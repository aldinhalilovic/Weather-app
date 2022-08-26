import React from "react";
import "./WeatherAlarm.css";

const WeatherAlarm = function ({ degree }) {
  return (
    <div>
      <div className={`none ${degree < -10 ? "ice-cold" : ""}`}>
        <h1>Smrzavanje</h1>
      </div>
      <div className={`none ${degree <= 40 && degree >= 33 ? "red-hot" : ""}`}>
        <h1>Ne izlažite se suncu!!</h1>
      </div>
    </div>
  );
};

export default WeatherAlarm;
