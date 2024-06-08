import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogContent,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";

import {
  Close as CloseIcon,
  QueryStats as QueryStatsIcon,
  AttachMoney as AttachMoneyIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  Lock as LockIcon,
} from "@mui/icons-material";

import "../../scss/Sections/common.scss";
import LoremIpsum from "./LoremIpsum";
import { useState } from "react";
import {
  COLORS,
  BACKGROUNDS,
  GLOBAL_STYLING,
  RESPONSIVE_STYLING,
} from "../../constants.jsx";

const Experience = () => {
  const [isLearnMoreModalOpen, setIsLearnMoreModalOpen] = useState(false); // we might have to make this an object, just like what we did with the marquee. We store the information of each card in a JSON, and when the user clicks the Lear More btn, we pass in the ID of the opened dialog, then we display the information accordingly.

  const theme = useTheme();
  const fullScreenDialog = useMediaQuery(theme.breakpoints.down("sm")); // true if the viewport is in sm or smaller width. false otherwise.

  return (
    <section id="experience" style={experienceStyles.experienceContainer}>
      <Container maxWidth={false} sx={GLOBAL_STYLING.containerLayout}>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Typography variant="h1" sx={GLOBAL_STYLING.stickySectionHeader}>
              Experience 🏢
            </Typography>
          </Grid>

          <Grid item container xs={12} sm={9}>
            <Grid item container>
              <Grid item xs={12} sm={12}>
                <Card sx={experienceStyles.companyLogoCard}>
                  <CardContent style={experienceStyles.companyLogoCardPadding}>
                    <Box
                      component="img"
                      src="./assets/sections/experience/saudia/saudia-skyteam.png"
                      alt="Saudia Logo"
                      sx={experienceStyles.companyLogoSizing}
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

            <Grid item container>
              <Grid item xs={12} sm={12}>
                <Card sx={experienceStyles.companyLogoCard}>
                  <CardContent style={experienceStyles.companyLogoCardPadding}>
                    <Box
                      component="img"
                      src="./assets/sections/experience/doit/doit-color-center.png"
                      alt="DoIT Logo"
                      sx={experienceStyles.companyLogoSizing}
                    />
                  </CardContent>
                </Card>
                <Grid sx={RESPONSIVE_STYLING.mobileResponsiveTextAlignment}>
                  <Typography variant="body1">
                    At UW-Madison&apos;s DoIT, I developed web utilities for
                    scheduling, asset management, and budgeting, enhancing
                    efficiency and user satisfaction. I also created a ReactJS
                    training course, improving team consistency and project
                    speed.
                  </Typography>
                  <br />
                  <Typography variant="h4">Highlighted Projects:</Typography>

                  <Grid container sx={experienceStyles.doit.doitProjectsCards}>
                    <Grid item xs={12} sm={7}>
                      <Card sx={GLOBAL_STYLING.card}>
                        <CardContent
                          sx={experienceStyles.doit.forecastCardContent}
                        >
                          <Grid sx={experienceStyles.doit.forecastIconsGrid}>
                            <AttachMoneyIcon
                              sx={experienceStyles.doit.forecastIcons}
                            />
                            <QueryStatsIcon
                              sx={experienceStyles.doit.forecastIcons}
                            />
                          </Grid>

                          <Typography variant="h4">
                            Financial Forecasting System
                          </Typography>
                          <br />
                          <Typography variant="body1">
                            Developed an advanced Budgeting System that replaced
                            manual processes, provided detailed spending
                            analyses, and improved budget forecasting and fiscal
                            control for better financial decision-making.
                          </Typography>
                          <br />
                          <Button
                            variant="outlined"
                            endIcon={<ArrowForwardIosIcon />}
                            sx={extendedStyles.doitLearnMoreBtn}
                            onClick={() => setIsLearnMoreModalOpen(true)}
                          >
                            Learn more
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <Card sx={GLOBAL_STYLING.card}>
                        <CardContent>
                          <h1> right col</h1>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid container sx={experienceStyles.doit.doitProjectsCards}>
                    <Grid item xs={12} sm={4}>
                      <Card sx={GLOBAL_STYLING.card}>
                        <CardContent>
                          <h1> left cols</h1>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={7}>
                      <Card sx={GLOBAL_STYLING.card}>
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

            <Grid item container>
              <Grid item xs={12} sm={12}>
                <Card sx={experienceStyles.companyLogoCard}>
                  <CardContent style={experienceStyles.companyLogoCardPadding}>
                    <Box
                      component="img"
                      src="./assets/sections/experience/smucker/smucker-color-white.png"
                      alt="Smucker Logo"
                      sx={experienceStyles.companyLogoSizing}
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

          <Dialog
            open={isLearnMoreModalOpen}
            onClose={() => setIsLearnMoreModalOpen(false)}
            fullScreen={fullScreenDialog}
            maxWidth="lg"
          >
            <DialogContent
              sx={experienceStyles.doit.doitLearnMoreDialogContent}
            >
              <IconButton
                aria-label="Close"
                onClick={() => setIsLearnMoreModalOpen(false)}
                sx={experienceStyles.iconButton}
              >
                <CloseIcon fontSize="large" sx={GLOBAL_STYLING.closeIcon} />
              </IconButton>

              <Grid sx={experienceStyles.dialogImageParentGrid}>
                <Box
                  component="img"
                  src="./assets/sections/experience/doit/forecast80-horizontal.png"
                  alt="Financial Forecasting Background"
                  sx={experienceStyles.doit.forecastBoxImg}
                />
                <Grid container sx={experienceStyles.doit.dialogCardGrid}>
                  <Card sx={experienceStyles.doit.dialogCardOverlay}>
                    <CardContent sx={experienceStyles.doit.overlayCardContent}>
                      <Typography
                        variant="h4"
                        sx={experienceStyles.doit.cardTitle}
                      >
                        Financial Forecasting System
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              <Grid container sx={experienceStyles.doit.dialogCardsParentGrid}>
                <Card sx={experienceStyles.doit.dialogCards}>
                  <CardContent>
                    <LockIcon color="error" sx={experienceStyles.lockIcon} />
                    <Typography variant="h2">
                      Non-Disclosure Agreement
                    </Typography>
                    <br />
                    <Typography variant="body1">
                      Due to the sensitive nature of this project, I am unable
                      to disclose specific details. However, I can provide a
                      high-level overview of my responsibilities and the
                      project&apos;s outcomes.
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={experienceStyles.doit.dialogCards}>
                  <CardContent></CardContent>
                </Card>
              </Grid>
            </DialogContent>
          </Dialog>
        </Grid>
      </Container>
    </section>
  );
};

const experienceStyles = {
  experienceContainer: {
    backgroundImage: BACKGROUNDS.blueToBlackBackground,
  },
  companyLogoCard: {
    position: "sticky",
    top: { xs: "87px", sm: "60px" },
    boxShadow: "none",
    ...GLOBAL_STYLING.card,
  },
  companyLogoCardPadding: {
    padding: "7.5px 0px 12px 0px",
  },
  companyLogoSizing: {
    width: { xs: "55%", sm: "30%" },
    height: "auto",
  },
  iconButton: {
    position: "relative",
    top: 0,
    right: 0,
    m: 0,
    ml: "auto",
  },
  dialogImageParentGrid: {
    // This parent grid is needed to center the card in the middle of the image
    position: "relative",
  },
  lockIcon: { width: "50px", height: "auto" },
  doit: {
    doitProjectsCards: {
      justifyContent: "space-between",
      mt: 3,
    },
    doitLearnMoreDialogContent: {
      backgroundColor: "#091322",
      display: "flex",
      flexDirection: "column",
      gap: 0,
      pt: 0,
    },
    forecastBoxImg: {
      width: "100%",
      height: "auto",
    },
    dialogCardGrid: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      justifyContent: "center",
      alignItems: "center",
    },
    dialogCardOverlay: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)", // Center the card
      ...GLOBAL_STYLING.card,
      width: "auto",
      display: "inline-flex",
      justifyContent: "center", // Center content horizontally
      alignItems: "center",
    },
    overlayCardContent: {
      pt: 3,
      pr: 4,
      pl: 4,
    },
    cardTitle: {
      fontSize: { xs: "1.25rem", md: "2rem" },
      whiteSpace: "nowrap",
    },
    dialogCardsParentGrid: {
      display: "flex",
      justifyContent: "space-around",
      mt: 7,
    },
    dialogCards: {
      ...GLOBAL_STYLING.card,
      width: "30%",
      display: "flex",
      justifyContent: "center", // Center content horizontally
      alignItems: "center",
    },
    forecastCardContent: {
      backgroundImage: "url(./assets/sections/experience/doit/forecast95.jpg)",
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    forecastIconsGrid: {
      color: COLORS.lightGray,
    },
    forecastIcons: {
      width: "70px",
      height: "auto",
    },
  },
};

const experienceBaseStyles = {
  learnMoreBtn: {
    borderRadius: "10px",
    lineHeight: "normal",
    "&:hover": {
      border: `1px solid ${COLORS.purple}`, // To counteract the default blue color
      color: COLORS.purple,
      backgroundColor: COLORS.buttonHoverColor, // Light background change
    },
  },
};

const extendedStyles = {
  doitLearnMoreBtn: {
    ...experienceBaseStyles.learnMoreBtn,
    color: COLORS.lightGray,
    border: `1px solid ${COLORS.lightGray}`,
  },
};

export default Experience;
