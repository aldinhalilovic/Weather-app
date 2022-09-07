import React, { useState } from "react";
import WeatherAlarm from "../WeatherAlarm/WeatherAlarm";
import "./WeatherCard.css";
import { Button } from "semantic-ui-react";

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

  let containerClasses = "";
  if (degree < 4) {
    containerClasses = "cold-main";
  } else if (degree < 23) {
    containerClasses = "normal-main";
  } else {
    containerClasses = "hot-main";
  }

  return (
    <div className={`main ${containerClasses}`}>
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
