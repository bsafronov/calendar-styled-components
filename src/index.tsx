import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    red: {
      light: "#ff9393",
      dark: "#FF3131",
    },
    gray: {
      light: "#F6F6F6",
      dark: "#E6E6E6",
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
