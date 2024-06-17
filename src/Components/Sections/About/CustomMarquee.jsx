import { useState } from "react";
import { Dialog, DialogContent, Box, Typography, Grid } from "@mui/material";
import Marquee from "react-fast-marquee";
import PropTypes from "prop-types";

const CustomMarquee = () => {
  const [dialogState, setDialogState] = useState({
    isOpen: false,
    selectedImage: null,
    selectedImageCaption: null,
  });

  const openMarqueeDialog = (clickedImage, clickedImageCaption) => {
    setDialogState({
      isOpen: true,
      selectedImage: clickedImage.replace(/\.(?=[^.]*$)/, "-cmprsdF."), // We need to first edit the 'clickedImage' to point to teh full sized image
      selectedImageCaption: clickedImageCaption, // A regex that finds the very last dot in a string
    });
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

  const marqueeData = [
    {
      src: "./assets/misc/marquee/smucker-shirt.jpeg",
      caption: "Orientation at The J. M. Smucker Co.",
    },
    {
      src: "./assets/misc/marquee/smucker-team.jpeg",
      caption: "J.M Smucker Co. Colleagues",
    },
    {
      src: "./assets/misc/marquee/recwell.jpeg",
      caption: "University of Wisconsin-Madison: Recreation and Wellbeing",
    },
    {
      src: "./assets/misc/marquee/smucker-hq.jpeg",
      caption: "J.M. Smucker Co. HQ",
    },
    {
      src: "./assets/misc/marquee/uw-madison.jpeg",
      caption: "Orientation at the University of Wisconsin-Madison",
    },
    {
      src: "./assets/misc/marquee/doit-team.jpeg",
      caption:
        "Colleagues at the University of Wisconsin-Madison's Division of Information Technology",
    },
  ];

  return (
    <>
      <Grid item container sx={marqueeStyles.marqueeParentmostGrid}>
        <Marquee
          loop={0}
          speed={100}
          pauseOnHover={true}
          gradient={true}
          gradientColor="#03142F"
          gradientWidth={50}
        >
          {marqueeData.map((item, index) => (
            <MarqueeImage key={index} src={item.src} caption={item.caption} />
          ))}
        </Marquee>
        <Typography variant="body2" sx={marqueeStyles.quote}>
          “Students who study computer science unlock a world of opportunities
          for themselves.”
          <br /> - Dr. John Deasy
        </Typography>
      </Grid>

      <Dialog
        open={dialogState.isOpen}
        onClose={() => setDialogState({ ...dialogState, isOpen: false })}
        maxWidth="lg"
      >
        <DialogContent style={marqueeStyles.dialogContent}>
          <Box sx={marqueeStyles.dialogParentmostBox}>
            <Box
              component="img"
              src={dialogState.selectedImage}
              alt="Full size version of clicked marquee image"
              sx={marqueeStyles.fullSizedMarqueeImage}
            />

            <Typography
              variant="caption"
              className="caption-text"
              sx={marqueeStyles.marqueeImageCaption}
            >
              {dialogState.selectedImageCaption}
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
    width: "90%", // smaller width will give us space between marquee images
    height: "auto",
    borderRadius: "20px",
    transition: "filter 0.5s ease-in-out",
  },
  marqueeParentmostGrid: {
    mt: "100px", // Spacing the marquee away from the certifications
    gap: 2,
    justifyContent: "center",
  },
  dialogContent: {
    background: "#03142F",
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
  quote: {
    width: "80%",
  },
};

export default CustomMarquee;
