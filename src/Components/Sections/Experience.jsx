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
            <Grid item container xs={12} sm={12} className="###doitgrid">
              <Grid item xs={12} sm={3}>
                <Box
                  component="img"
                  src="./assets/sections/experience/doit-grey-center.png"
                  alt="Grey DoIT Logo"
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

            <Grid item container xs={12} sm={12} className="###2nddoitgrid">
              <Grid item xs={12} sm={3}>
                <Box
                  component="img"
                  src="./assets/sections/experience/doit-grey-center.png"
                  alt="Grey DoIT Logo"
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
    position: "sticky",
    top: "12%",
  },
  header: {
    mb: { xs: 3, sm: 5 },
  },
  doitLogo: {
    width: "100%",
    height: "auto",
  },
};

export default Experience;
