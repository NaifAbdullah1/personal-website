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
  BusinessCenter as BusinessCenterIcon,
  Close as CloseIcon,
  QueryStats as QueryStatsIcon,
  AttachMoney as AttachMoneyIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  Lock as LockIcon,
  Verified as VerifiedIcon,
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

          <Grid
            item
            container
            xs={12}
            sm={9}
            sx={experienceStyles.spacingBetweenTenures}
          >
            <Grid item container>
              <Grid item xs={12} sm={12} className="Saudia Grid">
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
              </Grid>
            </Grid>

            <Grid
              container
              item
              xs={12}
              sm={12}
              sx={
                experienceStyles.spacingBetweenCompanyLogoCardsAndTenureDetails
              }
            >
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
                  training course, improving team consistency and project speed.
                </Typography>
                <br />
                <br />
                <Typography variant="h3">Highlighted Projects:</Typography>

                <Grid container sx={experienceStyles.doit.projectsCards}>
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

                        <Typography variant="h3">
                          Financial Forecasting System
                        </Typography>
                        <br />
                        <Typography variant="body1">
                          Developed an advanced Budgeting System that replaced
                          manual processes, provided detailed spending analyses,
                          and improved budget forecasting and fiscal control for
                          better financial decision-making.
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

                <Grid container sx={experienceStyles.doit.projectsCards}>
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
            </Grid>

            <Grid item container xs={12} sm={12}>
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

          <Dialog
            open={isLearnMoreModalOpen}
            onClose={() => setIsLearnMoreModalOpen(false)}
            fullScreen={fullScreenDialog}
            maxWidth="xl"
          >
            <DialogContent sx={experienceStyles.doit.learnMoreDialogContent}>
              <IconButton
                aria-label="Close"
                onClick={() => setIsLearnMoreModalOpen(false)}
                sx={experienceStyles.iconButton}
              >
                <CloseIcon fontSize="large" sx={GLOBAL_STYLING.closeIcon} />
              </IconButton>

              <Grid
                container
                sx={experienceStyles.spacingBetweenImageAndDialogItems}
              >
                {/*Image and Card Overlay here*/}
                <Grid
                  item
                  container
                  sx={experienceStyles.dialogImageParentGrid}
                >
                  <Box
                    component="img"
                    src="./assets/sections/experience/doit/forecast80-horizontal.png"
                    alt="Financial Forecasting Background"
                    sx={experienceStyles.doit.forecastBoxImg}
                  />
                  <Grid sx={experienceStyles.doit.dialogOverlayCardGrid}>
                    <Card sx={experienceStyles.doit.dialogCardOverlay}>
                      <CardContent
                        sx={experienceStyles.doit.overlayCardContent}
                      >
                        <Typography
                          variant="h2"
                          sx={experienceStyles.doit.cardTitle}
                        >
                          Financial Forecasting System
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Grid
                  item
                  container
                  sx={experienceStyles.dialogContentBelowImageGrid}
                  className="Dialog Content below image"
                >
                  <Grid
                    item
                    container
                    sx={experienceStyles.doit.dialogNDAandPRCardsParentGrid}
                    className="First Row of cards: NDA & PR"
                  >
                    <Grid
                      item
                      xs={12}
                      md={5}
                      sx={experienceStyles.doit.dialogCardGrid}
                    >
                      <Card sx={experienceStyles.doit.dialogCards}>
                        <CardContent>
                          <LockIcon
                            color="error"
                            sx={extendedStyles.lockIcon}
                          />
                          <Typography variant="h3">
                            Non-Disclosure Agreement
                          </Typography>

                          <Typography variant="body2">
                            Due to the sensitive nature of this project, I am
                            unable to disclose specific details. However, I can
                            provide a high-level overview of my responsibilities
                            and the project&apos;s outcomes.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      md={5}
                      sx={experienceStyles.doit.dialogCardGrid}
                    >
                      <Card sx={experienceStyles.doit.dialogCards}>
                        <CardContent>
                          <BusinessCenterIcon
                            sx={extendedStyles.businessCenterIcon}
                          />
                          <Typography variant="h3">Project Role</Typography>
                          <Typography variant="body2">
                            I spearheaded the development of an advanced
                            Budgeting System that automated data entry and
                            calculations, provided detailed spending analyses,
                            and significantly improved budget forecasting and
                            fiscal control for the department.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    container
                    sx={experienceStyles.accomplishmentsGrid}
                    className="Accomplishments Grid"
                  >
                    <Grid
                      container
                      sx={experienceStyles.accomplishmentsHeaderGrid}
                    >
                      <Typography variant="h2">Accomplishments:</Typography>
                    </Grid>
                    <Grid
                      item
                      container
                      sx={experienceStyles.accomplishmentsCardsRow}
                      className="Accomplishments Cards Row"
                    >
                      <Grid
                        item
                        xs={12}
                        md={3.5}
                        sx={experienceStyles.doit.dialogCardGrid}
                      >
                        <Card sx={experienceStyles.doit.dialogCards}>
                          <CardContent>
                            <AttachMoneyIcon
                              sx={extendedStyles.accomplishmentsIcon}
                            />
                            <Typography variant="h3">
                              Streamlined Budgeting Process
                            </Typography>
                            <Typography variant="body2">
                              Developed an advanced Budgeting System that
                              eliminated the need for manual data entry and
                              calculations, thereby streamlining the budgeting
                              process and significantly reducing errors. This
                              automation led to increased efficiency and
                              accuracy in financial data management.
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        md={3.5}
                        sx={experienceStyles.doit.dialogCardGrid}
                      >
                        <Card sx={experienceStyles.doit.dialogCards}>
                          <CardContent>
                            <QueryStatsIcon
                              sx={extendedStyles.accomplishmentsIcon}
                            />
                            <Typography variant="h3">
                              Comprehensive Spending Analysis
                            </Typography>
                            <Typography variant="body2">
                              Implemented a feature that provided detailed,
                              multi-faceted spending analyses, enabling managers
                              to break down costs by shift type and closely
                              monitor operational cost trends. This granular
                              insight empowered managers to better understand
                              and control departmental expenses.
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>

                      <Grid
                        item
                        xs={12}
                        md={3.5}
                        sx={experienceStyles.doit.dialogCardGrid}
                      >
                        <Card sx={experienceStyles.doit.dialogCards}>
                          <CardContent>
                            <VerifiedIcon
                              sx={extendedStyles.accomplishmentsIcon}
                            />
                            <Typography variant="h3">
                              Enhanced Financial Decision-Making
                            </Typography>
                            <Typography variant="body2">
                              Introduced advanced analytics and forecasting
                              capabilities that improved budget forecasting and
                              fiscal control. This innovation offered
                              comprehensive financial insights, reducing the
                              manual workload and helping the department make
                              more informed financial decisions, leading to more
                              efficient budget planning and resource allocation.
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
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
  spacingBetweenTenures: {
    gap: 15,
  },
  spacingBetweenCompanyLogoCardsAndTenureDetails: {
    gap: 5,
  },
  spacingBetweenImageAndDialogItems: {
    gap: 5,
    justifyContent: "center",
    ...RESPONSIVE_STYLING.mobileResponsiveDialogContent,
  },
  companyLogoCard: {
    position: "sticky",
    top: { xs: "85px", sm: "60px" },
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
    position: "sticky",
    top: 0,
    right: 0,
    m: 0,
    ml: "auto",
    zIndex: 1,
  },
  dialogContentBelowImageGrid: {
    width: "75%",
    gap: 10,
  },
  accomplishmentsGrid: {
    gap: 3,
  },
  dialogImageParentGrid: {
    // This parent grid is needed to center the card in the middle of the image
    position: "relative",
  },
  accomplishmentsCardsRow: {
    justifyContent: "space-between",
    ...GLOBAL_STYLING.spacingBetweenAccomplishmentsCards,
  },
  accomplishmentsHeaderGrid: {
    justifyContent: { xs: "center", md: "start" },
  },
  doit: {
    projectsCards: {
      justifyContent: "space-between",
      mt: 3,
    },
    learnMoreDialogContent: {
      backgroundColor: COLORS.dialogBackground,
      display: "flex",
      flexDirection: "column",
      gap: 0,
      pt: 0,
      pl: 0,
      pr: 0,
    },
    forecastBoxImg: {
      width: "100%",
      height: "auto",
    },
    dialogOverlayCardGrid: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
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
    dialogNDAandPRCardsParentGrid: {
      alignItems: "stretch",
      justifyContent: "space-between",
      ...GLOBAL_STYLING.spacingBetweenNDAandPRCards,
    },
    dialogCardGrid: { display: "flex" },
    dialogCards: {
      ...GLOBAL_STYLING.card,
      height: "100%", // Ensures that cards are the same length
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
  iconSizing: { width: "50px", height: "auto" },
};

const extendedStyles = {
  doitLearnMoreBtn: {
    ...experienceBaseStyles.learnMoreBtn,
    color: COLORS.lightGray,
    border: `1px solid ${COLORS.lightGray}`,
  },
  lockIcon: {
    ...experienceBaseStyles.iconSizing,
  },
  businessCenterIcon: {
    ...experienceBaseStyles.iconSizing,
    color: COLORS.purple,
  },
  accomplishmentsIcon: {
    ...experienceBaseStyles.iconSizing,
    color: COLORS.lightBlue,
  },
};

export default Experience;
