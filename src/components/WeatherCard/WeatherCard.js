import React, { useState } from "react";
import WeatherAlarm from "../WeatherAlarm/WeatherAlarm";
import "./WeatherCard.css";

const WeatherCard = function () {
  const [degree, setDegree] = useState(0);

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let classes = "";
  if (degree < 4) {
    classes = "weather-container-cold";
  } else if (degree < 33) {
    classes = "weather-container-normal";
  } else {
    classes = "weather-container-hot";
  }
  return (
    <div>
      <div
        className={classes}
        // id={degree >= 23 ? "weather-container-hot" : ""}
      >
        <h1 className="degree">{degree}</h1>
        <button
          className="change-degree"
          onClick={() => setDegree(randomNum(-20, 40))}
        >
          {" "}
          Change Degree
        </button>
      </div>
      <WeatherAlarm degree={degree} />
    </div>
  );
};

export default WeatherCard;
