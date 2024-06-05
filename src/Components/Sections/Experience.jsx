import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InfoIcon from "@mui/icons-material/Info";

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
            className="###RightSideParentContainer"
          >
            <Grid item container className="###saudiagrid">
              <Grid item xs={12} sm={12}>
                <Card sx={experienceStyles.logoCard}>
                  <CardContent style={{ padding: "7.5px 0px 12px 0px" }}>
                    <Box
                      component="img"
                      src="./assets/sections/experience/saudia/saudia-skyteam.png"
                      alt="Saudia Logo"
                      sx={experienceStyles.logoSizing}
                    />
                  </CardContent>
                </Card>

                <LoremIpsum />
                <LoremIpsum />
                <LoremIpsum />
                <br />
                <br />
                <br />
                <br />
              </Grid>
            </Grid>

            <Grid item container className="###doitgrid">
              <Grid item xs={12} sm={12}>
                <Card sx={experienceStyles.logoCard}>
                  <CardContent style={{ padding: "7.5px 0px 12px 0px" }}>
                    <Box
                      component="img"
                      src="./assets/sections/experience/doit/doit-color-center.png"
                      alt="DoIT Logo"
                      sx={experienceStyles.logoSizing}
                    />
                  </CardContent>
                </Card>
                <Grid sx={{ textAlign: { xs: "center", sm: "left" } }}>
                  <Typography variant="body1">
                    At UW-Madison&apos;s DoIT, I developed web utilities for
                    scheduling, asset management, and budgeting, enhancing
                    efficiency and user satisfaction. I also created a ReactJS
                    training course, improving team consistency and project
                    speed.
                  </Typography>
                  <br />
                  <Typography variant="h4">Highlighted Projects:</Typography>

                  <Grid
                    container
                    sx={{
                      justifyContent: "space-between",
                      mt: 3,
                    }}
                  >
                    <Grid item xs={12} sm={7}>
                      <Card sx={experienceStyles.jobDescriptionCard}>
                        <CardContent
                          sx={{
                            backgroundImage:
                              "url(./assets/sections/experience/doit/forecast95.jpg)",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                          }}
                        >
                          <Grid
                            className="icons"
                            sx={{ color: "antiquewhite" }}
                          >
                            <QueryStatsIcon
                              sx={{ width: "70px", height: "auto" }}
                            />
                            <AttachMoneyIcon
                              sx={{ width: "70px", height: "auto" }}
                            />
                          </Grid>

                          <Typography
                            variant="h4"
                            sx={{ color: "antiquewhite" }}
                          >
                            Financial Forecasting System
                          </Typography>
                          <br />
                          <Typography
                            variant="body1"
                            sx={{ color: "antiquewhite" }}
                          >
                            Developed an advanced Budgeting System that replaced
                            manual processes, provided detailed spending
                            analyses, and improved budget forecasting and fiscal
                            control for better financial decision-making.
                          </Typography>
                          <br />
                          <Button
                            variant="outlined"
                            endIcon={<InfoIcon />}
                            sx={{
                              color: "antiquewhite",
                              borderRadius: "10px",
                              border: " 1px solid antiquewhite",
                              "&:hover": {
                                border: " 1px solid antiquewhite",
                                backgroundColor: "rgba(255, 255, 255, 0.1)", // Light background change
                              },
                            }}
                          >
                            Learn more
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <Card sx={experienceStyles.jobDescriptionCard}>
                        <CardContent>
                          <h1> right col</h1>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid container sx={{ justifyContent: "space-between" }}>
                    <Grid item xs={12} sm={4}>
                      <Card sx={experienceStyles.jobDescriptionCard}>
                        <CardContent>
                          <h1> left col</h1>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Card sx={experienceStyles.jobDescriptionCard}>
                        <CardContent>
                          <h1> right col</h1>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <br />
                <br />
                <LoremIpsum />
              </Grid>
            </Grid>

            <Grid item container className="###smuckergrid">
              <Grid item xs={12} sm={12}>
                <Card sx={experienceStyles.logoCard}>
                  <CardContent style={{ padding: "7.5px 0px 12px 0px" }}>
                    <Box
                      component="img"
                      src="./assets/sections/experience/smucker/smucker-color-white.png"
                      alt="Smucker Logo"
                      sx={experienceStyles.logoSizing}
                    />
                  </CardContent>
                </Card>

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
  logoSizing: {
    width: { xs: "55%", sm: "30%" },
    height: "auto",
  },
  logoCard: {
    position: "sticky",
    top: { xs: "87px", sm: "60px" },
    boxShadow: "none",
    backgroundColor: "#1f22259a",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    mb: 4,
    borderRadius: 5,
    zIndex: 1,
  },
  jobDescriptionCard: {
    boxShadow: "none",
    backgroundColor: "#1f22259a",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    mb: 4,
    borderRadius: 5,
  },
};

export default Experience;
