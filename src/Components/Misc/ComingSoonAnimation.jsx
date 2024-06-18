import { Typography, Grid } from "@mui/material";
import comingSoonAnimationData from "../../lottie-animations/ComingSoon.json";
import Lottie from "react-lottie-player";

function ComingSoonAnimation() {
  return (
    <Grid>
      <Grid item>
        <Lottie play animationData={comingSoonAnimationData} loop={true} />
      </Grid>
      <Typography variant="h2">Coming Soon!</Typography>
    </Grid>
  );
}

export default ComingSoonAnimation;
