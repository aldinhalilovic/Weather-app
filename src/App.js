import React from "react";
import "./App.css";
import WeatherAlarm from "./components/WeatherAlarm/WeatherAlarm";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <div className="App">
      <WeatherCard />
      {/* <WeatherAlarm /> */}
    </div>
  );
}

export default App;
