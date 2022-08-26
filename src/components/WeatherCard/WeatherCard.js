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
  } else if (degree < 23) {
    classes = "weather-container-normal";
  } else {
    classes = "weather-container-hot";
  }

  let containerClasses = "";
  if (degree < 4) {
    containerClasses = "main-cold";
  } else if (degree < 23) {
    containerClasses = "main-normal";
  } else {
    containerClasses = "main-hot";
  }

  return (
    <div className={containerClasses}>
      <div className={classes}>
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
