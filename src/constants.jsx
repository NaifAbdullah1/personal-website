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
};

export const Z_INDICES = {
  maxZIndex: 99999,
  loadingScreen: 3,
};

export const FONTS = {
  cursive: "'Kaushan Script', cursive",
};
