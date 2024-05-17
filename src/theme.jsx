import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'League Spartan', sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1.7rem",
    }
  },
});

export default theme;
