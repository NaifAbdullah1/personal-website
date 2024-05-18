import {
  Container,
  Grid,
  Typography,
  Box,
  Dialog,
  DialogContent,
} from "@mui/material";
import Marquee from "react-fast-marquee";
import PropTypes from "prop-types";

import "../../scss/Sections/common.scss";
import "../../scss/Sections/about.scss";
import { useState } from "react";

const About = () => {
  const [isMarqueeDialogOpen, setIsMarqueeDialogOpen] = useState(false);
  const [selectedMarqueeImage, setSelectedMarqueeImage] = useState(null);

  const openMarqueeDialog = (clickedImage) => {
    // We need to first edit the 'clickedImage' to point to teh full sized image
    setSelectedMarqueeImage(clickedImage.replace(/\.(?=[^.]*$)/, "F.")); // A regex that finds the very last dot in a string
    setIsMarqueeDialogOpen(true);
  };

  const closeMarqueeDialog = () => {
    setSelectedMarqueeImage(null);
    setIsMarqueeDialogOpen(false);
  };

  const naifImageProperties = {
    height: "auto",
    width: { xs: "50%", sm: "50%", md: "100%", lg: "100%" },
    pt: { xs: "2rem", sm: "2rem", md: "0px", lg: "0px" },
  };

  const certifiedByGridItemProperties = {
    display: "flex",
    pt: { xs: "2rem", sm: "2rem", md: "0px", lg: "0px" },
  };

  const MarqueeImage = ({ src, caption }) => (
    <Box
      sx={{ position: "relative" }}
      onMouseEnter={(e) =>
        (e.target.firstChild.style.filter = "brightness(0.7)")
      }
      onMouseLeave={(e) => (e.target.firstChild.style.filter = "brightness(1)")}
      onClick={() => openMarqueeDialog(src)}
    >
      <Box
        component="img"
        src={src}
        alt="Marquee image"
        sx={{
          width: "90%",
          height: "auto",
          borderRadius: "20px",
          transition: "filter 0.5s ease-in-out",
        }}
      />


      <Typography
        variant="caption"
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          color: "#FFF",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "5px",
          borderRadius: "0 0 20px 20px",
          width: "90%",
        }}
      >
        {caption}
      </Typography>

    </Box>
  );

  // Prop validation for the component above
  MarqueeImage.propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
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
            <Marquee
              loop={0}
              speed={150}
              pauseOnHover={true}
              gradient={true}
              gradientColor="#03142F"
              gradientWidth={50}
            >
              <MarqueeImage
                src={"./assets/marquee/smucker-shirt.jpeg"}
                caption={"Orientation at The J. M. Smucker Co."}
              />
              <MarqueeImage
                src={"./assets/marquee/smucker-team.jpeg"}
                caption={"J.M Smucker Co. Colleagues"}
              />
              <MarqueeImage
                src={"./assets/marquee/recwell.jpeg"}
                caption={
                  "University of Wisconsin-Madison: Recreation and Wellbeing"
                }
              />
              <MarqueeImage
                src={"./assets/marquee/smucker-hq.jpeg"}
                caption={"J.M. Smucker Co. HQ"}
              />
              <MarqueeImage
                src={"./assets/marquee/uw-madison.jpeg"}
                caption={"Orientation at the University of Wisconsin-Madison"}
              />
              <MarqueeImage
                src={"./assets/marquee/doit-team.jpeg"}
                caption={
                  "Colleagues at the University of Wisconsin-Madison's Division of Information Technology"
                }
              />
            </Marquee>
          </Grid>
        </Grid>
        <Dialog
          open={isMarqueeDialogOpen}
          onClose={closeMarqueeDialog}
          maxWidth="lg"
        >
          <DialogContent
            style={{
              background: "#03142F",
              overflow: "hidden",
              margin: 0,
              padding: 0,
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={selectedMarqueeImage}
              alt="Full size version of clicked marquee image"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
              }}
              
            />
          </DialogContent>
        </Dialog>
      </Container>
    </section>
  );
};

export default About;
