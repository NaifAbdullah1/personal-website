export const COLORS = {
  lightBlue: "#66A4E1", // Primary Theme Color: For header's nav links
  purple: "#9C27B0", // Secondary Theme Color
  lightGray: "#D3D3D3", // For most text
  buttonHoverColor: "rgba(255, 255, 255, 0.1)",
  buttonHoverEffect: {
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Light background change
    },
  },
  grayBlurBackground: {
    backgroundColor: "#1F22259A",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
  },
};

export const BACKGROUNDS = {
  darkBlue: "#001433",
  black: "#121212",
  /*
    - The first parameter is the direction of the gradient. 180 deg = top to bottom, 0 and/or 360 deg = bottom to top.
    - The first color is the starting color, so, it's going to start with #001433 on the top and at the bottom it will be #121212
    */
  blueToBlackBackground: "linear-gradient(180deg, #001433 0%, #121212 100%)",
  blackToBlueBackground: "linear-gradient(180deg, #121212 0%, #001433 100%)",
};

export const Z_INDICES = {
  maxZIndex: 99999,
  loadingScreen: 3,
};

export const FONTS = {
  cursive: "'Kaushan Script', cursive",
};

export const GLOBAL_STYLING = {
  containerLayout: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    /*We want the website's content to be smaller than the entire width
    We're using hardcoded units (1140px) instead of the relative units (70%) because we don't want to maintain that gap on smaller screen (which what a relative unit would do), rather, want want to eat away at the gutter as the screen shrinks*/
    maxWidth: "1140px",
    /*To account for the header*/
    paddingTop: "120px",
    width: "100%",
  },
  stickySectionHeader: {
    position: "sticky",
    top: "90px",
    mb: { xs: 5, sm: 5 },
    fontSize: {
      xs: "2rem",
      sm: "1.75rem",
      md: "2rem",
    },
  },
};