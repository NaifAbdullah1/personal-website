import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import theme from "./theme.jsx";
import { ThemeProvider } from "@mui/material/styles";
import "./scss/index.scss"; // Our custom global styles
import "react-photo-view/dist/react-photo-view.css";
import "normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
