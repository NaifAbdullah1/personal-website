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
import { isMobile } from "react-device-detect";

const About = () => {
  const [isMarqueeDialogOpen, setIsMarqueeDialogOpen] = useState(false);
  const [selectedMarqueeImage, setSelectedMarqueeImage] = useState(null);
  const [selectedMarqueeImageCaption, setSelectedMarqueeImageCaption] =
    useState(null);

  const openMarqueeDialog = (clickedImage, clickedImageCaption) => {
    // We need to first edit the 'clickedImage' to point to teh full sized image
    setSelectedMarqueeImage(clickedImage.replace(/\.(?=[^.]*$)/, "F.")); // A regex that finds the very last dot in a string
    setSelectedMarqueeImageCaption(clickedImageCaption);
    setIsMarqueeDialogOpen(true);
    // Maybe set the state variables (img and caption to null), though it will make closing less smooth
  };

  const closeMarqueeDialog = () => {
    setIsMarqueeDialogOpen(false);
  };

  const naifImageContainerProperties = {
    display: {xs: "flex", sm: "inline"}, 
    justifyContent: "center"
  }

  const naifImageProperties = {
    width: { xs: "50%", sm: "100%" },
    height: "auto",
    justifyContent: "center",
    pt: { xs: "2rem", sm: "0px" },
  };

  const certifiedByGridItemProperties = {
    display: "flex",
    pt: { xs: "2rem", sm: "0px" },
  };

  const MarqueeImage = ({ src, caption }) => (
    <Box
      sx={{ position: "relative" }}
      onClick={() => openMarqueeDialog(src, caption)}
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
            sm={3}
            sx={{
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Typography
              variant="h1"
              className="sticky-1st-column"
              sx={{ mb: { xs: 3, sm: 0 } }}
            >
              About 📝
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={9}
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
            }}
          >
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
              <Grid item xs={12} sm={6} sx={naifImageContainerProperties}>
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
                      sm: "start",
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
                      sm: "start",
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

          {isMobile ? (
            <></>
          ) : (
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
          )}
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
              sx={{
                position: "relative",
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                // For both children, we set their brightness and opacity properties here because if we do it on a local level (on the child's code, the hover effect will occurr only when you hover exactly over the component. Rather, we want the hover effect to occurr when we hover anywhere in the image, hence we're adding these css properties on the parent-level)
                "&:hover": {
                  "& > img": {
                    // Selects the img child
                    filter: "brightness(0.4)",
                  },
                  "& > img + .caption-text": {
                    // Selects .caption-text that directly follows an <img> element
                    opacity: 1,
                  },
                },
              }}
            >
              <Box
                component="img"
                src={selectedMarqueeImage}
                alt="Full size version of clicked marquee image"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  transition: "filter 0.5s ease-in-out", // For smooth fade-out when hovering stops
                }}
              />

              <Typography
                variant="caption"
                className="caption-text"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "#FFF",
                  textAlign: "center",
                  fontSize: "larger",
                  opacity: 0,
                  transition: "opacity 0.5s ease-in-out", // For smooth fade-out when hovering stops
                }}
              >
                {selectedMarqueeImageCaption}
              </Typography>
            </Box>
          </DialogContent>
        </Dialog>
      </Container>
    </section>
  );
};

export default About;
