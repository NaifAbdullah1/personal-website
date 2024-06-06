import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // default is 0
      sm: 600, // default is 600
      md: 900, // default is 900
      lg: 1200, // default is 1200
      xl: 1536, // default is 1536
      // You can add more custom breakpoints if needed
      xxl: 2000,
    },
  },
  typography: {
    fontFamily: "'League Spartan', sans-serif",
    h1: {
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.5rem",
      color: "antiquewhite",
    },
    h4: {
      fontSize: "1.7rem",
    },
    body1: {
      color: "antiquewhite",
    },
  },
});

export default theme;
