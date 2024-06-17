import { createTheme } from "@mui/material";
import { COLORS, FONTS } from "./constants";

const createCustomTheme = () => {
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
      fontFamily: FONTS.regular,
      h1: {
        fontWeight: "bold",
        color: COLORS.lightGray,
        [createTheme().breakpoints.up("xs")]: {
          fontSize: "2rem",
        },
        [createTheme().breakpoints.up("sm")]: {
          fontSize: "1.75rem",
        },
        [createTheme().breakpoints.up("md")]: {
          fontSize: "2rem",
        },
      },
      h2: {
        color: COLORS.lightGray,
        fontWeight: "bold",
        fontSize: "1.7rem",
      },
      h3: {
        color: COLORS.lightGray,
        fontWeight: "bold",
        fontSize: "1.5rem",
      },
      body1: {
        color: COLORS.lightGray,
        fontSize: "1.25rem",
      },
      body2: {
        color: COLORS.silver,
        fontSize: "1.1rem",
        lineHeight: 1.5,
      },
    },
  });
  return theme;
};

const theme = createCustomTheme();

export default theme;
