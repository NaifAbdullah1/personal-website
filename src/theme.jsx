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
      color: "#D3D3D3",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.5rem",
      color: "#D3D3D3",
    },
    h4: {
      fontSize: "1.7rem",
      color: "#D3D3D3",
    },
    body1: {
      color: "#D3D3D3",
    },
  },
});

export default theme;
