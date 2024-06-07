import { Container, Grid, Typography, Box } from "@mui/material";
import { isMobile } from "react-device-detect";
import CustomMarquee from "./CustomMarquee.jsx";
import { BACKGROUNDS, GLOBAL_STYLING } from "../../constants.jsx";
import "../../scss/Sections/common.scss";

const About = () => {
  return (
    <section id="about" style={aboutStyles.aboutContainer}>
      <Container maxWidth={false} sx={GLOBAL_STYLING.containerLayout}>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Typography variant="h1" sx={GLOBAL_STYLING.stickySectionHeader}>
              About 📝
            </Typography>
          </Grid>

          <Grid item xs={12} sm={9} sx={aboutStyles.aboutContent}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4">Hello 👋🏻</Typography>
                <br />
                <Typography variant="h4">My name is Naif Abdullah</Typography>
                <br />
                <Typography variant="body1">
                  As a Computer Science graduate, I&apos;ve excelled both
                  academically and as a Full Stack Web Developer. I&apos;ve
                  contributed to critical systems at my university&apos;s IT
                  department and enhanced applications at the J. M. Smucker Co.
                  I&apos;m dedicated to self-learning and collaborative
                  problem-solving in digital environments.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} sx={aboutStyles.naifImageContainer}>
                <Box
                  component="img"
                  src="./assets/sections/about/naif.png"
                  alt="Naif Abdullah"
                  sx={aboutStyles.naifImage}
                />
              </Grid>
            </Grid>

            <Grid item container sx={aboutStyles.certificationsGrid}>
              <Grid item sx={aboutStyles.certificationHeader}>
                <Typography variant="h4">Certified by</Typography>
              </Grid>

              <Grid item sx={aboutStyles.certificateImagesGrid}>
                <Box
                  component="img"
                  src="./assets/sections/about/certifications/doroob-logo.jpg"
                  style={{
                    width: "20%",
                    height: "auto",
                    borderRadius: "20px",
                  }}
                />
                <Box
                  component="img"
                  src="./assets/sections/about/certifications/doroob-logo.jpg"
                  style={{
                    width: "20%",
                    height: "auto",
                    borderRadius: "20px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          {!isMobile && <CustomMarquee />}
        </Grid>
      </Container>
    </section>
  );
};

const aboutStyles = {
  aboutContainer: {
    backgroundImage: BACKGROUNDS.blackToBlueBackground,
  },
  aboutContent: {
    display: "flex",
    flexDirection: "column",
    textAlign: { xs: "center", sm: "left" },
  },
  naifImageContainer: {
    display: { xs: "flex", sm: "inline" },
    justifyContent: "center",
  },
  naifImage: {
    width: { xs: "50%", sm: "100%" },
    height: "auto",
    pt: { xs: "2rem", sm: "0px" },
  },
  certificationsGrid: {
    display: "flex",
    flexDirection: "column",
    pt: { xs: "2rem", sm: "1rem" },
  },
  certificationHeader: {
    mb: "30px",
    display: "flex",
    justifyContent: {
      xs: "center",
      sm: "start",
    },
  },
  certificateImagesGrid: {
    display: "flex",
    justifyContent: {
      xs: "center",
      sm: "start",
    },
    gap: "10px",
  },
};

export default About;
