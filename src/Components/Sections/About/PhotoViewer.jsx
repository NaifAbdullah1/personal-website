import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Grid, Box, Typography } from "@mui/material";

const PhotoViewer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
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
    <PhotoProvider
      speed={() => 500}
      onIndexChange={(index) => setCurrentIndex(index)}
      overlayRender={() => (
        <Grid
          style={{
            position: "absolute",
            bottom: "60px",
            left: "50%", // This will make the start of the text located at 50% of the viewport's width. Which will make the text not exactly centered. Therefore, we'll use the "transform" property below.
            transform: "translateX(-50%)", //  is used to translate (move) an element horizontally along the X-axis by a percentage of its own width. Here’s a detailed explanation:
            textAlign: "center",
            zIndex: 10,
            background: "rgba(0, 0, 0, 0.5)",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="body1">
            {images[currentIndex].caption}
          </Typography>
        </Grid>
      )}
    >
      <Grid>
        {images.map((imageObj, index) => (
          <PhotoView key={index} src={imageObj.src}>
            <Box
              component="img"
              src={imageObj.src}
              alt={imageObj.caption}
              sx={{ width: "40%", height: "auto", objectFit: "cover" }}
              onClick={() => setCurrentIndex(index)}
            />
          </PhotoView>
        ))}
      </Grid>
    </PhotoProvider>
  );
};

export default PhotoViewer;
