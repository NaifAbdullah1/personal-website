import { Container, Grid, Typography } from "@mui/material";
import ComingSoon from "./ComingSoon.jsx";
import {
  BACKGROUNDS,
  GLOBAL_STYLING,
  RESPONSIVE_STYLING,
} from "../../constants.jsx";

const Portfolio = () => {
  return (
    <section id="portfolio" style={portfolioStyles.portfolioContainer}>
      <Container maxWidth={false} sx={GLOBAL_STYLING.containerLayout}>
        <Grid
          container
          sx={RESPONSIVE_STYLING.spacingBetweenSectionTitleAndSectionContent}
        >
          <Grid item xs={12} sm={3}>
            <Typography variant="h1" sx={GLOBAL_STYLING.stickySectionHeader}>
              Portfolio 🎯
            </Typography>
          </Grid>

          <Grid
            item
            container
            xs={12}
            sm={9}
            sx={GLOBAL_STYLING.spacingBetweenSubsections}
          >
            <ComingSoon />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

const portfolioStyles = {
  portfolioContainer: {
    backgroundImage: BACKGROUNDS.blackToBlueBackground,
  },
};

export default Portfolio;
