import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import theme from "./theme.jsx";
import { ThemeProvider } from "@mui/material/styles";
import "./index.scss"; // Our custom global styles
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
