import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Grid, Box, Typography } from "@mui/material";
import "./photo-viewer.scss";

const PhotoViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: "./assets/misc/marquee/smucker-shirt.jpeg",
      caption: "Orientation at The J. M. Smucker Co.",
    },
    {
      src: "./assets/misc/marquee/uw-madison.jpeg",
      caption: "Orientation at the University of Wisconsin-Madison",
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
      src: "./assets/misc/marquee/doit-team.jpeg",
      caption:
        "Colleagues at the University of Wisconsin-Madison's Division of Information Technology",
    },
    {
      src: "./assets/misc/marquee/smucker-hq.jpeg",
      caption: "J.M. Smucker Co. Headquarters",
    },
  ];

  return (
    <Grid container sx={photoViewerStyles.photoViewerParentmostGrid}>
      <PhotoProvider
        speed={() => 500}
        onIndexChange={(index) => setCurrentIndex(index)}
        overlayRender={() => (
          <Grid style={photoViewerStyles.photoCaption}>
            <Typography variant="body1">
              {images[currentIndex].caption}
            </Typography>
          </Grid>
        )}
      >
        <Grid className="tetris-grid">
          {images.map((imageObj, index) => (
            <PhotoView key={index} src={imageObj.src}>
              <Box
                component="img"
                src={imageObj.src}
                alt={imageObj.caption}
                className="tetris-image"
                onClick={() => setCurrentIndex(index)}
              />
            </PhotoView>
          ))}
        </Grid>
      </PhotoProvider>
      <Typography variant="body2" sx={photoViewerStyles.quote}>
        “Students who study computer science unlock a world of opportunities for
        themselves.”
        <br /> - Dr. John Deasy
      </Typography>
    </Grid>
  );
};

export default PhotoViewer;

const photoViewerStyles = {
  photoViewerParentmostGrid: {
    mt: "100px", // Spacing the marquee away from the certifications
    gap: 2,
    justifyContent: "center",
  },
  photoCaption: {
    position: "absolute",
    bottom: "60px",
    left: "50%", // This will make the start of the text located at 50% of the viewport's width. Which will make the text not exactly centered. Therefore, we'll use the "transform" property below.
    transform: "translateX(-50%)", //  is used to translate (move) an element horizontally along the X-axis by a percentage of its own width..
    textAlign: "center",
    zIndex: 10,
    background: "rgba(0, 0, 0, 0.5)",
    padding: "10px 20px",
    borderRadius: "10px",
  },
  quote: {
    width: "80%",
  },
};
