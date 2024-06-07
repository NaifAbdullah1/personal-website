import { useState } from "react";
import { Dialog, DialogContent, Box, Typography, Grid } from "@mui/material";
import Marquee from "react-fast-marquee";
import PropTypes from "prop-types";

const CustomMarquee = () => {
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

  const MarqueeImage = ({ src, caption }) => (
    <Box
      component="img"
      src={src}
      alt="Marquee image"
      onClick={() => openMarqueeDialog(src, caption)}
      sx={marqueeStyles.marqueeImage}
    />
  );

  // Prop validation for the component above
  MarqueeImage.propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
  };

  return (
    <>
      <Grid item sx={marqueeStyles.marqueeParentmostGrid}>
        <Marquee
          loop={0}
          speed={100}
          pauseOnHover={true}
          gradient={true}
          gradientColor="#03142F"
          gradientWidth={50}
        >
          <MarqueeImage
            src={"./assets/MISC/marquee/smucker-shirt.jpeg"}
            caption={"Orientation at The J. M. Smucker Co."}
          />
          <MarqueeImage
            src={"./assets/MISC/marquee/smucker-team.jpeg"}
            caption={"J.M Smucker Co. Colleagues"}
          />
          <MarqueeImage
            src={"./assets/MISC/marquee/recwell.jpeg"}
            caption={
              "University of Wisconsin-Madison: Recreation and Wellbeing"
            }
          />
          <MarqueeImage
            src={"./assets/MISC/marquee/smucker-hq.jpeg"}
            caption={"J.M. Smucker Co. HQ"}
          />
          <MarqueeImage
            src={"./assets/MISC/marquee/uw-madison.jpeg"}
            caption={"Orientation at the University of Wisconsin-Madison"}
          />
          <MarqueeImage
            src={"./assets/MISC/marquee/doit-team.jpeg"}
            caption={
              "Colleagues at the University of Wisconsin-Madison's Division of Information Technology"
            }
          />
        </Marquee>
      </Grid>

      <Dialog
        open={isMarqueeDialogOpen}
        onClose={() => setIsMarqueeDialogOpen(false)}
        maxWidth="lg"
      >
        <DialogContent style={marqueeStyles.dialogContent}>
          <Box sx={marqueeStyles.dialogParentmostBox}>
            <Box
              component="img"
              src={selectedMarqueeImage}
              alt="Full size version of clicked marquee image"
              sx={marqueeStyles.fullSizedMarqueeImage}
            />

            <Typography
              variant="caption"
              className="caption-text"
              sx={marqueeStyles.marqueeImageCaption}
            >
              {selectedMarqueeImageCaption}
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

const marqueeStyles = {
  marqueeImage: {
    position: "relative",
    width: "90%",
    height: "auto",
    borderRadius: "20px",
    transition: "filter 0.5s ease-in-out",
  },
  marqueeParentmostGrid: {
    pt: "100px",
  },
  dialogContent: {
    background: "#03142F",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    position: "relative",
  },
  dialogParentmostBox: {
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
  },
  fullSizedMarqueeImage: {
    width: "100%",
    height: "auto",
    borderRadius: "20px",
    transition: "filter 0.5s ease-in-out", // For smooth fade-out when hovering stops
  },
  marqueeImageCaption: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#FFF",
    textAlign: "center",
    fontSize: "larger",
    opacity: 0,
    transition: "opacity 0.5s ease-in-out", // For smooth fade-out when hovering stops
  },
};

export default CustomMarquee;
