import { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { Z_INDICES, BACKGROUNDS } from "../constants";
import PropTypes from "prop-types";

// The initial intro screen that appears when website is loaded
const Loading = ({ onComplete }) => {
  const [fadeState, setFadeState] = useState("out");

  // Makes the logo not appear on page load for only 1 sec
  useEffect(() => {
    // After 1 second, fade the logo in
    const fadeLogoInTimer = setTimeout(() => {
      // Fades the logo in by applying the fade-in class to the page
      setFadeState("in");
    }, 1000);

    // After 3 seconds, fade out the logo and call onComplete to continue to the site
    const fadeLogoOutTimer = setTimeout(() => {
      setFadeState("out");
      setTimeout(onComplete, 1000); // 1 sec for fade-out
    }, 3000);

    return () => {
      clearTimeout(fadeLogoInTimer);
      clearTimeout(fadeLogoOutTimer);
    };
  }, [onComplete]);

  return (
    <Grid
      sx={{
        ...loadingScreenStyles.loadingContainer,
        ...loadingScreenStyles.fade[fadeState],
      }}
    >
      <Box
        component="img"
        src="./assets/MISC/logo.png"
        alt="Loading Screen Logo"
        sx={loadingScreenStyles.loadingLogo}
      />
    </Grid>
  );
};

const loadingScreenStyles = {
  loadingContainer: {
    position: "fixed",
    width: "100%",
    height: "100%",
    backgroundImage: BACKGROUNDS.blueToBlackBackground,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    /* We want to ensure that the loading logo is on top of everything, but not on top of the curosr */
    zIndex: Z_INDICES.loadingScreen,
    /*Enables the smooth transition in opacity when applying either of the .fade-in or .fade-out classes*/
    transition: "opacity 1s",
  },
  loadingLogo: {
    width: "80%",
    height: "auto",
  },
  fade: {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  },
};

// Prop validation: Needed for when a child component uses a prop that was passed down from parent
Loading.propTypes = {
  onComplete: PropTypes.func.isRequired, // Indicate that 'onComplete' is required and is a function
};

export default Loading;
