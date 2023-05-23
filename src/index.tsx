import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    red: {
      light: "#f5d7d7",
      dark: "#FF3131",
    },
    gray: {
      light: "#F6F6F6",
      medium: "#E6E6E6",
      dark: "#b9b9b9",
    },
    blue: {
      light: "#EBECFF",
      dark: "#B3B7FF",
    },
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
