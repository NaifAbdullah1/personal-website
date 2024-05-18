import { Container, Grid, Typography, Box } from "@mui/material";

import Marquee from "react-fast-marquee";
import PropTypes from 'prop-types'

import "../../scss/Sections/common.scss";
import "../../scss/Sections/about.scss";




const MarqueeImage = ({src}) => (
  <Box 
    component="img"
    src={src}
    sx={{ width: '90%', height: 'auto', borderRadius: '20px'}}
    onClick={() => console.log("Clicked: " + src)}
  />
)

// Prop validation for the component above
MarqueeImage.propTypes = {
  src: PropTypes.string.isRequired
}

const About = () => {

  const naifImageProperties = {
    height: "auto",
    width: { xs: "50%", sm: "50%", md: "100%", lg: "100%" },
    pt: { xs: "2rem", sm: "2rem", md: "0px", lg: "0px" },
  };

  const certifiedByGridItemProperties = {
    display: "flex",
    pt: { xs: "2rem", sm: "2rem", md: "0px", lg: "0px" },
  };

  return (
    <section id="about" className="about-section">
      <Container maxWidth={false} className="container-layout">
        <Grid container style={{ width: "100%" }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            lg={3}
            sx={{
              textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
            }}
          >
            <Typography variant="h1" className="sticky-1st-column">
              About 📝
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={9}
            lg={9}
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6}>
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
              <Grid item xs={12} sm={12} md={6} lg={6} className="center-image">
                <Box
                  component="img"
                  src="./assets/naif.png"
                  alt="Naif Abdullah"
                  sx={naifImageProperties}
                ></Box>
              </Grid>
            </Grid>

            <Grid item sx={certifiedByGridItemProperties}>
              <Grid container sx={{ display: "flex", flexDirection: "column" }}>
                <Grid
                  item
                  sx={{
                    mb: "30px",
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "start",
                      lg: "start",
                    },
                  }}
                >
                  <Typography variant="h4">Certified by</Typography>
                </Grid>

                <Grid
                  item
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "start",
                      lg: "start",
                    },
                    gap: "10px",
                  }}
                >
                  <Box
                    component="img"
                    src="./assets/certifications/doroob-logo.jpg"
                    style={{
                      width: "20%",
                      height: "auto",
                      borderRadius: "20px",
                    }}
                  />
                  <Box
                    component="img"
                    src="./assets/certifications/doroob-logo.jpg"
                    style={{
                      width: "20%",
                      height: "auto",
                      borderRadius: "20px",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item sx={{ pt: "100px" }}>
            <Marquee loop={0} speed={150} pauseOnHover={true} gradient={true} gradientColor="#03142F" gradientWidth={50}>
              <MarqueeImage src={"./assets/marquee/smucker-shirt.jpg"}/>
              <MarqueeImage src={"./assets/marquee/smucker-team.jpg"}/>
              <MarqueeImage src={"./assets/marquee/recwell.jpg"}/>
              <MarqueeImage src={"./assets/marquee/smucker-hq.jpg"}/>
              <MarqueeImage src={"./assets/marquee/uw-madison.jpg"}/>
              <MarqueeImage src={"./assets/marquee/doit-team.jpg"}/>
            </Marquee>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
