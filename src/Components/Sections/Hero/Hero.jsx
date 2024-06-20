import { Grid, Typography, Box } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { FONTS, COLORS, BACKGROUNDS } from "../../../constants.jsx";

const animationDuration = 2000;
const typeAnimationSequence = [
  "Technology",
  animationDuration,
  "Innovation",
  animationDuration,
  "Intellect",
  animationDuration,
  "Creativity",
  animationDuration,
];

const Hero = () => {
  return (
    <section id="hero" style={heroStyles.heroSection}>
      <Grid container sx={heroStyles.heroRow}>
        <Grid item xs={12} sm={6} sx={heroStyles.taglineGridContainer}>
          <Typography variant="h1" sx={heroStyles.taglineHeader}>
            Solving Complex Problems with&nbsp;
            <TypeAnimation
              sequence={typeAnimationSequence}
              wrapper="span"
              cursor={false}
              speed={20}
              style={heroStyles.typeAnimation}
              repeat={Infinity}
            />
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} sx={heroStyles.logoGrid}>
          <Box
            component="img"
            src="./assets/sections/hero/trimmed-logo-cmprsd.webp"
            alt="Naif's Brand Logo"
            sx={heroStyles.logoImage}
          />
        </Grid>
      </Grid>
    </section>
  );
};

const heroStyles = {
  heroSection: {
    backgroundImage: BACKGROUNDS.blueToBlackBackground,
  },
  heroRow: {
    // Because that Grid has the "container" prop, it becomes a flex container, which means it will have display: flex and since flex has a default flex direction of "row", it means its flex-direction will be "row"
    alignItems: "center",
    alignContent: "center",
    height: "100vh", // all of the user's viewport
  },
  taglineGridContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center" /*Vertically align*/,
    alignItems: "center" /*Horizontally align*/,
    mt: { xs: 4, sm: 0 }, // margin top only when in mobile width
    order: { xs: 2, sm: 1 }, // if browser width > md, then it will be first (left hand side), if it's between xs and md, it will be second (combine that with the column flex direction, this makes it below the logo). This works in congruency with logoProperties' order prop
  },
  taglineHeader: {
    fontSize: { xs: "4.5vw", sm: "2.25vw" },
  },
  typeAnimation: {
    color: COLORS.lightBlue,
    fontFamily: FONTS.cursive,
  },
  logoGrid: {
    display: "flex",
    justifyContent: "center",
    paddingTop: { xs: 10, sm: 0 }, // Padding top only when in mobile width
    order: { xs: 1, sm: 2 },
  },
  logoImage: {
    /*By setting the width OR height to 100% and the other attribute (height/widht) to auto, this will make the image maintain aspect ratio automatically.*/
    width: "90%",
    height: "auto",
  },
};

export default Hero;
