import React, { useState } from "react";
import "./WeatherAlarm.css";

const WeatherAlarm = function ({ degree }) {
  // const [alarm, setAlarm] = useState(false);

  return (
    <div>
      <div className={`none ${degree < -10 ? "ice-cold" : ""}`}>
        <h1>smrzavanje</h1>
      </div>
      <div className={`none ${degree <= 40 && degree >= 33 ? "red-hot" : ""}`}>
        <h1>Ne izlazite se suncu!!</h1>
      </div>
    </div>
  );
};

export default WeatherAlarm;
