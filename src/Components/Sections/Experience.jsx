import { Container, Grid, Typography, Box } from "@mui/material";
import "../../scss/Sections/common.scss";
import LoremIpsum from "./LoremIpsum";

const Experience = () => {
  return (
    <section id="experience" style={experienceStyles.experienceContainer}>
      <Container maxWidth={false} className="container-layout">
        <Grid container sx={experienceStyles.parentMostGridContainer}>
          <Grid item xs={12} sm={3} sx={experienceStyles.headerColumn}>
            <Typography
              variant="h1"
              className="sticky-1st-column"
              sx={experienceStyles.header}
            >
              Experience 🏢
            </Typography>
          </Grid>

          <Grid
            item
            container
            xs={12}
            sm={9}
            className="###experiencesParentmostContainer"
          >
            <Grid item container xs={12} sm={12} className="###saudiagrid">
              <Grid item xs={12} sm={3}>
                <Box
                  component="img"
                  src="./assets/sections/experience/saudia-color.png"
                  alt="Saudia Logo"
                  className="sticky-1st-column"
                  sx={experienceStyles.doitLogo}
                />
              </Grid>

              <Grid item xs={12} sm={9}>
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <br />
                <br />
                <br />
                <br />
              </Grid>
            </Grid>

            <Grid item container xs={12} sm={12} className="###doitgrid">
              <Grid item xs={12} sm={3}>
                <Box
                  component="img"
                  src="./assets/sections/experience/doit-color-center.png"
                  alt="DoIT Logo"
                  className="sticky-1st-column"
                  sx={experienceStyles.doitLogo}
                />
              </Grid>

              <Grid item xs={12} sm={9} style={{ textAlign: "left" }}>
                <Typography variant="body1">
                  At UW-Madison&apos;s DoIT, I developed web utilities for
                  scheduling, asset management, and budgeting, enhancing
                  efficiency and user satisfaction. I also created a ReactJS
                  training course, improving team consistency and project speed.
                </Typography>
                <br />
                <Typography variant="h4">Highlighted Projects:</Typography>
                <br />
              </Grid>
            </Grid>

            <Grid item container xs={12} sm={12} className="###smuckergrid">
              <Grid item xs={12} sm={3}>
                <Box
                  component="img"
                  src="./assets/sections/experience/smucker-color-white.png"
                  alt="Smucker Logo"
                  className="sticky-1st-column"
                  sx={experienceStyles.doitLogo}
                />
              </Grid>

              <Grid item xs={12} sm={9}>
                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <br />
                <br />
                <br />
                <br />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

const experienceStyles = {
  experienceContainer: {
    backgroundImage: "linear-gradient(180deg, #001433 0%, #121212 100%)",
  },
  parentMostGridContainer: {
    width: "100%",
  },
  headerColumn: {
    textAlign: { xs: "center", sm: "left" },
    position: { sm: "sticky" },
    top: "12%",
  },
  header: {
    mb: { xs: 5, sm: 5 },
  },
  doitLogo: {
    width: { xs: "75%", sm: "100%" },
    height: "auto",
    top: "47%",
    mb: { xs: 3, sm: 0 },
  },
};

export default Experience;
