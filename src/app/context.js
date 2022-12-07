import axios from "axios";
import { createContext, useState } from "react";
import data from "../data/data.json";

const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = process.env.REACT_APP_API_KEY;

  const [currentDegree, setCurrentDegree] = useState();
  const [city, setCity] = useState();
  const country = (city) => {
    const res = data.find((el) => el.City === city);
    setCity(res);
  };

  const getData = async (city) => {
    await axios
      .get(
        `${BASE_URL}?lat=${Number(city.Latitude)
          .toFixed()
          .toString()}&lon=${Number(city.Longitude)
          .toFixed()
          .toString()}&appid=${API_KEY}`
      )
      .then((res) => setCurrentDegree(res.data.main.temp - 273.15));
  };

  const value = {
    country,
    getData,
    currentDegree,
    city,
  };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };
