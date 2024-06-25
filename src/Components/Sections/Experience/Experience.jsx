import {
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import {
  AttachMoney as AttachMoneyIcon,
  ArrowForwardIos as ArrowForwardIosIcon,
  Inventory as InventoryIcon,
  School as SchoolIcon,
  ScreenSearchDesktop as ScreenSearchDesktopIcon,
} from "@mui/icons-material";

import { useState } from "react";
import {
  COLORS,
  BACKGROUNDS,
  GLOBAL_STYLING,
  RESPONSIVE_STYLING,
} from "../../../constants.jsx";
import DoITDialog from "./dialogs/DoITDialog.jsx";

const Experience = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [cardId, setCardId] = useState("");

  const handleOpenDialog = (cardId) => {
    // To force a change in the props of DoITDialog (which will trigger the useEffect to update the dialog's data), we'll first force-close the dialog before opening it
    setIsDialogOpen(false);

    // The Timeout will ensure that the state is changed to false before setting it to true again
    setTimeout(() => {
      setIsDialogOpen(true);
      setCardId(cardId);
    }, 0);
  };

  return (
    <section id="experience" style={experienceStyles.experienceContainer}>
      <Container maxWidth={false} sx={GLOBAL_STYLING.containerLayout}>
        <Grid
          container
          sx={RESPONSIVE_STYLING.spacingBetweenSectionTitleAndSectionContent}
        >
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
            sx={GLOBAL_STYLING.spacingBetweenSubsections}
          >
            {/*
            <Grid item container xs={12} sm={12}>
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

              <Grid
                item
                container
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <ComingSoonAnimation />
              </Grid>
            </Grid>
            */}

            <Grid
              item
              container
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
                    src="./assets/sections/experience/doit/doit-color-center.webp"
                    alt="DoIT Logo"
                    sx={experienceStyles.companyLogoSizing}
                  />
                </CardContent>
              </Card>
              <Grid sx={RESPONSIVE_STYLING.mobileResponsiveTextAlignment}>
                <Typography variant="body1">
                  As a full stack web developer at UW-Madison&apos;s IT
                  Department, I developed a ReactJS and NodeJS-based staff
                  management utility for over 90 employees, collaborating with
                  stakeholders and an Agile Scrum team to achieve remarkable
                  advancements in the platform.
                </Typography>
                <br />
                <br />
                <Typography variant="h2">Highlighted Projects:</Typography>
                <br />
                <Grid
                  container
                  sx={experienceStyles.doit.highlightedProjectsCards}
                >
                  <Grid container sx={experienceStyles.doit.projectsCardsRow}>
                    <Grid item xs={12} sm={6}>
                      <Card sx={extendedStyles.forecastCard}>
                        <CardContent
                          sx={experienceStyles.doit.projectCardContent}
                        >
                          <Grid>
                            <AttachMoneyIcon
                              sx={experienceStyles.doit.projectIcons}
                            />

                            <Typography variant="h2">
                              Financial Forecasting System
                            </Typography>

                            <Typography variant="body1">
                              An advanced Budgeting System which improves budget
                              forecasting for enhancing financial
                              decision-making.
                            </Typography>
                          </Grid>

                          <Button
                            variant="outlined"
                            endIcon={<ArrowForwardIosIcon />}
                            sx={extendedStyles.doitLearnMoreBtn}
                            onClick={() =>
                              handleOpenDialog("financialForecastingSystem")
                            }
                          >
                            Learn more
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>

                    <Grid item xs={12} sm={5}>
                      <Card sx={extendedStyles.inventoryCard}>
                        <CardContent
                          sx={experienceStyles.doit.projectCardContent}
                        >
                          <Grid>
                            <Grid sx={experienceStyles.doit.projectIconsGrid}>
                              <InventoryIcon
                                sx={experienceStyles.doit.projectIcons}
                              />
                            </Grid>
                            <Typography variant="h2">
                              Inventory Management System
                            </Typography>

                            <Typography variant="body1">
                              An automated system linking equipment to
                              employees, and enhancing policy compliance to
                              reduce loss and tracking efforts.
                            </Typography>
                          </Grid>

                          <Button
                            variant="outlined"
                            endIcon={<ArrowForwardIosIcon />}
                            sx={extendedStyles.doitLearnMoreBtn}
                            onClick={() =>
                              handleOpenDialog("inventoryManagementSystem")
                            }
                          >
                            Learn more
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid container sx={experienceStyles.doit.projectsCardsRow}>
                    <Grid item xs={12} sm={12}>
                      <Card sx={extendedStyles.courseCard}>
                        <CardContent
                          sx={experienceStyles.doit.projectCardContent}
                        >
                          <Grid>
                            <Grid sx={experienceStyles.doit.projectIconsGrid}>
                              <SchoolIcon
                                sx={experienceStyles.doit.projectIcons}
                              />
                            </Grid>
                            <Typography variant="h2">
                              ReactJS Training Course
                            </Typography>

                            <Typography variant="body1">
                              A holistic training initiative unifying the
                              team&apos;s web development approach with
                              interactive learning, practical exercises, and
                              live coding sessions, enhancing team efficiency
                              and code quality.
                            </Typography>
                          </Grid>

                          <Button
                            variant="outlined"
                            endIcon={<ArrowForwardIosIcon />}
                            sx={extendedStyles.doitLearnMoreBtn}
                            onClick={() => handleOpenDialog("reactJsCourse")}
                          >
                            Learn more
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              container
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
                    src="./assets/sections/experience/smucker/smucker-color-white.webp"
                    alt="Smucker Logo"
                    sx={experienceStyles.companyLogoSizing}
                  />
                </CardContent>
              </Card>
              <Grid sx={RESPONSIVE_STYLING.mobileResponsiveTextAlignment}>
                <Typography variant="body1">
                  At The J. M. Smucker Co., I developed, enhanced, and
                  maintained crucial applications and websites, including
                  revamping an internal web auditing utility, redesigning
                  DunkinAtHome.com, and ensuring CCPA compliance for cookie
                  consent banners.
                </Typography>
                <br />
                <br />
                <Typography variant="h2">Main Project:</Typography>
                <br />
                <Grid
                  container
                  sx={experienceStyles.doit.highlightedProjectsCards}
                >
                  <Grid container sx={experienceStyles.doit.projectsCardsRow}>
                    <Grid item xs={12} sm={12}>
                      <Card sx={extendedStyles.droidCard}>
                        <CardContent
                          sx={experienceStyles.doit.projectCardContent}
                        >
                          <Grid>
                            <Grid sx={experienceStyles.doit.projectIconsGrid}>
                              <ScreenSearchDesktopIcon
                                sx={experienceStyles.doit.projectIcons}
                              />
                            </Grid>
                            <Typography variant="h2">
                              DROID: A Web-Auditing Software
                            </Typography>

                            <Typography variant="body1">
                              I revamped DROID, an internal web auditing
                              software, to significantly boost its performance
                              and stability.
                            </Typography>
                          </Grid>

                          <Button
                            variant="outlined"
                            endIcon={<ArrowForwardIosIcon />}
                            sx={extendedStyles.doitLearnMoreBtn}
                            onClick={() => handleOpenDialog("reactJsCourse")}
                          >
                            Learn more
                          </Button>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {isDialogOpen && <DoITDialog cardId={cardId} isOpen={isDialogOpen} />}
        </Grid>
      </Container>
    </section>
  );
};

const experienceStyles = {
  experienceContainer: {
    backgroundImage: BACKGROUNDS.blueToBlackBackground,
  },
  spacingBetweenCompanyLogoCardsAndTenureDetails: {
    gap: 5,
  },
  companyLogoCard: {
    ...GLOBAL_STYLING.card,
    position: "sticky",
    top: { xs: "85px", sm: "60px" },
    boxShadow: "none",
  },
  companyLogoCardPadding: {
    padding: "7.5px 0px 12px 0px",
  },
  companyLogoSizing: {
    width: { xs: "55%", sm: "30%" },
    height: "auto",
  },
  doit: {
    highlightedProjectsCards: {
      gap: 5, // Space between the two rows of DoIT's "Highlighted Projects"
    },
    projectsCardsRow: {
      ...RESPONSIVE_STYLING.spacingBetweenProjectsCards,
      justifyContent: "space-between",
    },
    projectCardContent: {
      height: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: 4,
    },
    projectIconsGrid: {
      color: COLORS.lightGray,
    },
    projectIcons: {
      color: COLORS.lightGray,
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
  projectCard: {
    ...GLOBAL_STYLING.card,
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
};

const extendedStyles = {
  doitLearnMoreBtn: {
    ...experienceBaseStyles.learnMoreBtn,
    color: COLORS.lightGray,
    border: `1px solid ${COLORS.lightGray}`,
  },
  forecastCard: {
    ...experienceBaseStyles.projectCard,
    backgroundImage:
      "url(./assets/sections/experience/doit/forecast95-vert.webp)",
  },
  inventoryCard: {
    ...experienceBaseStyles.projectCard,
    backgroundImage: "url(./assets/sections/experience/doit/inventory95.webp)",
  },
  courseCard: {
    ...experienceBaseStyles.projectCard,
    backgroundImage: "url(./assets/sections/experience/doit/group95.webp)",
  },
  droidCard: {
    ...experienceBaseStyles.projectCard,
    backgroundImage:
      "url(./assets/sections/experience/smucker/droid1005025Blurred.webp)",
  },
};

export default Experience;
