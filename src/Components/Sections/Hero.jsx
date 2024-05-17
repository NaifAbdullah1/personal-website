import { Grid, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import "../../scss/Sections/hero.scss";

const Hero = () => {
  const taglineGridContainerProperties = {
    textAlign: "center" /* Center text on smaller screens */,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center" /*Vertically align*/,
    alignItems: "center" /*Horizontally align*/,
    mt: { xs: 4, md: 0 }, // margin top only when in mobile width
    order: { xs: 2, md: 1 }, // if browser width > md, then it will be first (left hand side), if it's between xs and md, it will be second (combine that with the column flex direction, this makes it below the logo). This works in congruency with logoProperties' order prop
  };

  const taglineHeaderProperties = {
    fontWeight: "bold",
    color: "antiquewhite",
    fontSize: { xs: "4.5vw", md: "2.25vw" },
  };

  const logoProperties = {
    display: "flex",
    justifyContent: "center",
    paddingTop: { xs: 10, md: 0 }, // Padding top only when in mobile width
    order: { xs: 1, md: 2 },
  };

  const typeAnimationSequence = [
    // Same substring at the start will only be typed out once, initially
    "Technology",
    2000, // wait 1s before replacing "Mice" with "Hamsters"
    "Innovation",
    2000,
    "Intellect",
    2000,
    "Creativity",
    2000,
  ];

  return (
    <section id="hero">
      <div className=" container-fluid hero-row">
        <Grid container className="hero-row" spacing={2}>
          <Grid item xs={12} md={6} sx={taglineGridContainerProperties}>
            <Typography variant="h1" sx={taglineHeaderProperties}>
              Solving Complex Problems with&nbsp;
              <TypeAnimation
                sequence={typeAnimationSequence}
                wrapper="span"
                cursor={false}
                speed={20}
                className="tagline"
                style={{
                  color: "#66a4e1",
                  fontFamily: "'Kaushan Script', cursive",
                }}
                repeat={Infinity}
              />
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} className="brand-col" sx={logoProperties}>
            <img
              src="./assets/trimmed-logo.png"
              alt="Brand Logo"
              className="responsive-logo"
            />
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Hero;
