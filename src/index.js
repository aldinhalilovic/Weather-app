import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WeatherContextProvider } from "./app/context";
import { MantineProvider } from "@mantine/core";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WeatherContextProvider>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </WeatherContextProvider>
);
