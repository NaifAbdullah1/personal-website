export const COLORS = {
  lightBlue: "#66A4E1", // For header's nav links
  purple: "#9C27B0",
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

export const VALUES = {
  maxZIndex: 99999,
};

export const FONTS = {
  cursive: "'Kaushan Script', cursive",
};
