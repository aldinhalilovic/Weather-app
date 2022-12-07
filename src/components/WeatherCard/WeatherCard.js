import React, { useContext, useEffect, useState } from "react";
import WeatherAlarm from "../WeatherAlarm/WeatherAlarm";
import { WeatherContext } from "../../app/context";
import "./WeatherCard.css";
import data from "../../data/data.json";
import { NativeSelect } from "@mantine/core";

const WeatherCard = function () {
  const { getData, currentDegree, country, city } = useContext(WeatherContext);
  const [selectData] = useState(city);

  let classes = "";
  if (currentDegree < 4) {
    classes = "cold";
  } else if (currentDegree < 23) {
    classes = "normal";
  } else {
    classes = "hot";
  }

  let mainClasses = "";
  if (currentDegree < 4) {
    mainClasses = "cold-main";
  } else if (currentDegree < 23) {
    mainClasses = "normal-main";
  } else {
    mainClasses = "hot-main";
  }

  useEffect(() => {
    getData(city);
    // eslint-disable-next-line
  }, [city]);
  return (
    <div className={`main ${mainClasses}`}>
      <NativeSelect
        variant="filled"
        data={data.map((el) => el.City)}
        label="Select your city"
        radius={"md"}
        size="md"
        value={selectData}
        onChange={(e) => country(e.target.value)}
      />
      <div className="main-content">
        {city?.City ? <h2>{city?.City}</h2> : <></>}
        <div className={`weather-container ${classes}`}>
          <h1 className="degree">{currentDegree?.toFixed()}°C</h1>
        </div>
      </div>
      <WeatherAlarm degree={currentDegree} />
    </div>
  );
};

export default WeatherCard;
