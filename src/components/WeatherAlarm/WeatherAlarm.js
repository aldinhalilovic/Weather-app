import React from "react";
import "./WeatherAlarm.css";

const WeatherAlarm = function ({ degree }) {
  return (
    <div>
      {degree < -10 && (
        <div className={"ice-cold"}>
          <h1>Smrzavanje</h1>
        </div>
      )}
      {degree <= 40 && degree >= 33 && (
        <div className={"red-hot"}>
          <h1>Ne izlažite se suncu!!</h1>
        </div>
      )}
    </div>
  );
};

export default WeatherAlarm;
