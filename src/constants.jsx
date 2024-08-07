export const COLORS = {
  lightBlue: "#66A4E1", // Primary Theme Color
  purple: "#9C27B0", // Secondary Theme Color 9C27B0
  lightGray: "#D3D3D3", // For most text
  silver: "#A9A9A9",
  dialogBackground: "#091322",
  buttonHoverColor: "rgba(255, 255, 255, 0.1)",
  buttonHoverEffect: {
    transition: "all 0.3s",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Light background change
    },
  },
  grayBlurBackground: {
    backgroundColor: "rgba(31, 34, 37, 0.6)", // This supposidly should help with the IOS problem where the company cards don't have the blurry background, this is supposed to be a fallback.
    //backgroundColor: "#1F22259A",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    boxShadow: "none",
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
  default: 1,
  loadingScreen: 3,
};

export const FONTS = {
  cursive: "'Kaushan Script', cursive",
  regular: "'League Spartan', sans-serif",
};

export const RESPONSIVE_STYLING = {
  mobileResponsiveTextAlignment: {
    textAlign: { xs: "center", sm: "left" },
  },
  mobileResponsiveDialogContent: {
    textAlign: { xs: "center", md: "left" },
  },
  spacingBetweenSectionTitleAndSectionContent: {
    gap: { xs: 10, sm: 0 },
  },
  spacingBetweenNDAandPRCards: {
    gap: { xs: 5, md: 0 },
  },
  spacingBetweenAccomplishmentsCards: {
    gap: { xs: 5, md: 0 },
  },
  spacingBetweenProjectsCards: {
    gap: { xs: 5, sm: 0 },
  },
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
    ...RESPONSIVE_STYLING.mobileResponsiveTextAlignment,
    position: "sticky",
    top: "40%",
  },
  card: {
    ...COLORS.grayBlurBackground,
    borderRadius: 5,
    zIndex: Z_INDICES.default,
  },
  closeIcon: {
    color: COLORS.lightBlue,
    borderRadius: "20px",
    ...COLORS.buttonHoverEffect,
    "&:hover": {
      ...COLORS.buttonHoverEffect["&:hover"], // Inheriting the hover effect from COLORS
      color: COLORS.purple, // Plus adding a color change to the inherited effects
    },
  },
  spacingBetweenSubsections: {
    gap: 15,
  },
};
