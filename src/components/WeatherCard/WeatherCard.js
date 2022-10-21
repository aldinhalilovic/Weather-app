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
    classes = "cold";
  } else if (degree < 23) {
    classes = "normal";
  } else {
    classes = "hot";
  }

  let mainClasses = "";
  if (degree < 4) {
    mainClasses = "cold-main";
  } else if (degree < 23) {
    mainClasses = "normal-main";
  } else {
    mainClasses = "hot-main";
  }

  return (
    <div className={`main ${mainClasses}`}>
      <div className={`weather-container ${classes}`}>
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
