import { Container, Grid, Typography } from "@mui/material";

import LoremIpsum from "./LoremIpsum";
import {
  BACKGROUNDS,
  GLOBAL_STYLING,
  RESPONSIVE_STYLING,
} from "../../constants.jsx";

const Contact = () => {
  return (
    <section id="contact" style={contactStyles.contactContainer}>
      <Container maxWidth={false} sx={GLOBAL_STYLING.containerLayout}>
        <Grid
          container
          sx={RESPONSIVE_STYLING.spacingBetweenSectionTitleAndSectionContent}
        >
          <Grid item xs={12} sm={3}>
            <Typography variant="h1" sx={GLOBAL_STYLING.stickySectionHeader}>
              Contact ✉️
            </Typography>
          </Grid>

          <Grid
            item
            container
            xs={12}
            sm={9}
            sx={GLOBAL_STYLING.spacingBetweenSubsections}
          >
            <LoremIpsum />
            <LoremIpsum />
            <LoremIpsum />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

const contactStyles = {
  contactContainer: {
    backgroundImage: BACKGROUNDS.blueToBlackBackground,
  },
};

export default Contact;
