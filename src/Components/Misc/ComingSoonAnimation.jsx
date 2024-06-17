import { Typography, Grid } from "@mui/material";
import comingSoonAnimationData from "../../lottie-animations/ComingSoon.json";
import LottieAnimation from "./LottieAnimation.jsx";

function ComingSoonAnimation() {
  return (
    <Grid>
      <Grid item>
        <LottieAnimation animationData={comingSoonAnimationData} loop={true} />
      </Grid>
      <Typography variant="h2">Coming Soon!</Typography>
    </Grid>
  );
}

export default ComingSoonAnimation;
