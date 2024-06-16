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
  Inventory as InventoryIcon,
  ContentPasteSearch as ContentPasteSearchIcon,
  MarkUnreadChatAlt as MarkUnreadChatAltIcon,
  LocalPolice as LocalPoliceIcon,
  School as SchoolIcon,
  Diversity3 as Diversity3Icon,
  AutoFixHigh as AutoFixHighIcon,
} from "@mui/icons-material";

import ComingSoonAnimation from "../../Misc/ComingSoonAnimation.jsx";
import { useMemo, useState } from "react";
import {
  COLORS,
  BACKGROUNDS,
  GLOBAL_STYLING,
  RESPONSIVE_STYLING,
  Z_INDICES,
} from "../../../constants.jsx";

const Experience = () => {
  const [learnMoreDialog, setLearnMoreDialog] = useState({
    isOpen: false,
    overlayImage: "",
    overlayTitle: "",
    projectRole: "",
    accomplishments: {
      first: {
        icon: <></>,
        title: "",
        description: "",
      },
      second: {
        icon: <></>,
        title: "",
        description: "",
      },
      third: {
        icon: <></>,
        title: "",
        description: "",
      },
    },
  });

  const theme = useTheme();
  const fullScreenDialog = useMediaQuery(theme.breakpoints.down("sm")); // true if the viewport is in sm or smaller width. false otherwise.

  const doitCards = useMemo(() => {
    const financialForecastingSystem = {
      overlayImage:
        "./assets/sections/experience/doit/forecast80-horizontal.png",
      overlayImageAltText: "Financial Forecasting Background",
      overlayTitle: "Financial Forecasting System",
      projectRole:
        "I led the development of an advanced budgeting system by integrating various APIs to retrieve employee pay details and scheduling data, enabling precise cost calculations and providing managers with comprehensive financial insights for enhanced budget forecasting and fiscal control.",
      accomplishments: {
        first: {
          icon: <AttachMoneyIcon sx={extendedStyles.accomplishmentsIcon} />,
          title: "Streamlined Budgeting Process",
          description:
            "Developed an advanced Budgeting System that eliminated the need for manual data entry and calculations, thereby streamlining the budgeting process and significantly reducing errors. This automation led to increased efficiency and accuracy in financial data management.",
        },
        second: {
          icon: <QueryStatsIcon sx={extendedStyles.accomplishmentsIcon} />,
          title: "Comprehensive Spending Analysis",
          description:
            "Implemented a feature that provided detailed, multi-faceted spending analyses, enabling managers to break down costs by shift type and closely monitor operational cost trends. This granular insight empowered managers to better understand and control departmental expenses.",
        },
        third: {
          icon: <VerifiedIcon sx={extendedStyles.accomplishmentsIcon} />,
          title: "Enhanced Financial Decision-Making",
          description:
            "Introduced advanced analytics and forecasting capabilities that improved budget forecasting and fiscal control. This innovation offered comprehensive financial insights, reducing the manual workload and helping the department make more informed financial decisions, leading to more efficient budget planning and resource allocation.",
        },
      },
    };

    const inventoryManagementSystem = {
      overlayImage:
        "./assets/sections/experience/doit/inventory80-horizontal.png",
      overlayImageAltText: "Inventory Management Background",
      overlayTitle: "Inventory Management System",
      projectRole:
        "I designed and implemented a database schema to link employees to issued equipment using foreign keys, developed automated scripts to send return reminders, and integrated the system into our existing infrastructure to streamline asset tracking and reduce equipment loss.",
      accomplishments: {
        first: {
          icon: (
            <ContentPasteSearchIcon sx={extendedStyles.accomplishmentsIcon} />
          ),
          title: "Automated Asset Tracking",
          description:
            "Developed an Inventory Management System that automated asset tracking by linking issued equipment to employee records via a comprehensive database schema using foreign keys. This automation reduced manual tracking efforts and enhanced the accuracy of asset management.",
        },
        second: {
          icon: (
            <MarkUnreadChatAltIcon sx={extendedStyles.accomplishmentsIcon} />
          ),
          title: "Equipment Return Reminders",
          description:
            "Implemented an automated reminder system that issued equipment return notifications to employees at the end of their employment. This proactive measure mitigated equipment loss, ensuring timely returns and safeguarding departmental resources.",
        },
        third: {
          icon: <LocalPoliceIcon sx={extendedStyles.accomplishmentsIcon} />,
          title: "Enhanced Policy Compliance",
          description:
            "The system significantly improved compliance with departmental policies by providing a reliable and transparent process for managing equipment returns. This initiative minimized asset losses and enhanced resource accountability, leading to greater operational efficiency.",
        },
      },
    };

    const reactJsCourse = {
      overlayImage: "./assets/sections/experience/doit/group80-horizontal.jpg",
      overlayImageAltText: "Group meeting",
      overlayTitle: "ReactJS Training Course",
      projectRole:
        "I designed and conducted a comprehensive ReactJS training course, assessing team skill levels, crafting a tailored curriculum, and using interactive teaching methods to standardize our web development approach, ultimately boosting team efficiency and code quality.",
      accomplishments: {
        first: {
          icon: <SchoolIcon sx={extendedStyles.accomplishmentsIcon} />,
          title: "Tailored Curriculum Design",
          description:
            "The ReactJS training program tailored to the varied experience levels of the development team, covering essential topics such as HTTP requests, component creation, and inter-component communication, cookie management, and so much more. The curriculum ensured a unified approach to web development while catering to both experienced developers and new recruits.",
        },
        second: {
          icon: <AutoFixHighIcon sx={extendedStyles.accomplishmentsIcon} />,
          title: "Interactive Learning Experience",
          description:
            "Crafted an interactive training program featuring peer-to-peer learning, practical exercises, code challenges, group discussions, and live coding sessions. Leveraged previous teaching experience to employ diverse teaching methods, fostering high engagement and effective learning outcomes among team members.",
        },
        third: {
          icon: <Diversity3Icon sx={extendedStyles.accomplishmentsIcon} />,
          title: "Boosted Team Efficiency",
          description:
            "The ReactJS training course significantly enhanced team efficiency and code quality, resulting in faster project completion times and a consistent development approach. This initiative played a pivotal role in unifying the team's skill set and establishing a standardized framework for web development, driving success across projects.",
        },
      },
    };

    return {
      financialForecastingSystem,
      inventoryManagementSystem,
      reactJsCourse,
    };
  }, []);

  const handleOpenDialog = (cardId) => {
    setLearnMoreDialog({
      isOpen: true,
      overlayImage: doitCards[cardId].overlayImage,
      overlayImageAltText: doitCards[cardId].overlayImageAltText,
      overlayTitle: doitCards[cardId].overlayTitle,
      projectRole: doitCards[cardId].projectRole,
      accomplishments: {
        first: {
          icon: doitCards[cardId].accomplishments.first.icon,
          title: doitCards[cardId].accomplishments.first.title,
          description: doitCards[cardId].accomplishments.first.description,
        },
        second: {
          icon: doitCards[cardId].accomplishments.second.icon,
          title: doitCards[cardId].accomplishments.second.title,
          description: doitCards[cardId].accomplishments.second.description,
        },
        third: {
          icon: doitCards[cardId].accomplishments.third.icon,
          title: doitCards[cardId].accomplishments.third.title,
          description: doitCards[cardId].accomplishments.third.description,
        },
      },
    });
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

                            <Typography variant="h3">
                              Financial Forecasting System
                            </Typography>

                            <Typography variant="body1">
                              An advanced Budgeting System that replaced manual
                              processes, provides detailed spending analyses,
                              and improves budget forecasting and fiscal control
                              for better financial decision-making.
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
                            <Typography variant="h3">
                              Inventory Management System
                            </Typography>

                            <Typography variant="body1">
                              An automated solution that links issued equipment
                              to employees, sends automatic return reminders,
                              and improves compliance with departmental
                              policies, reducing equipment loss and manual
                              tracking efforts.
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
                            <Typography variant="h3">
                              ReactJS Training Course
                            </Typography>

                            <Typography variant="body1">
                              A holistic training initiative designed to unify
                              the team&apos;s approach to web development,
                              covering key web development topics. It includes
                              interactive elements like peer-to-peer learning,
                              practical exercises, and live coding sessions,
                              resulting in improved team efficiency and code
                              quality.
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

              <Grid
                item
                container
                sx={{ justifyContent: "center", alignItems: "center" }}
              >
                <ComingSoonAnimation />
              </Grid>
            </Grid>
          </Grid>

          <Dialog
            open={learnMoreDialog.isOpen}
            onClose={() =>
              setLearnMoreDialog({
                ...learnMoreDialog,
                isOpen: false,
              })
            }
            fullScreen={fullScreenDialog}
            maxWidth="lg"
          >
            <DialogContent sx={experienceStyles.doit.learnMoreDialogContent}>
              <IconButton
                aria-label="Close"
                onClick={() =>
                  setLearnMoreDialog({
                    ...learnMoreDialog,
                    isOpen: false,
                  })
                }
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
                    src={learnMoreDialog.overlayImage}
                    alt={learnMoreDialog.overlayImageAltText}
                    sx={experienceStyles.doit.dialogHeaderImage}
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
                          {learnMoreDialog.overlayTitle}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>

                <Grid
                  item
                  container
                  sx={experienceStyles.dialogContentBelowImageGrid}
                >
                  <Grid
                    item
                    container
                    sx={experienceStyles.doit.dialogNDAandPRCardsParentGrid}
                  >
                    <Grid
                      item
                      xs={12}
                      md={5}
                      sx={experienceStyles.doit.dialogCardGrid}
                    >
                      <Card sx={experienceStyles.doit.card}>
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
                      <Card sx={experienceStyles.doit.card}>
                        <CardContent>
                          <BusinessCenterIcon
                            sx={extendedStyles.businessCenterIcon}
                          />
                          <Typography variant="h3">Project Role</Typography>
                          <Typography variant="body2">
                            {learnMoreDialog.projectRole}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    container
                    sx={experienceStyles.accomplishmentsGrid}
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
                    >
                      <Grid
                        item
                        xs={12}
                        md={3.5}
                        sx={experienceStyles.doit.dialogCardGrid}
                      >
                        <Card sx={experienceStyles.doit.card}>
                          <CardContent>
                            {learnMoreDialog.accomplishments.first.icon}
                            <Typography variant="h3">
                              {learnMoreDialog.accomplishments.first.title}
                            </Typography>
                            <Typography variant="body2">
                              {
                                learnMoreDialog.accomplishments.first
                                  .description
                              }
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
                        <Card sx={experienceStyles.doit.card}>
                          <CardContent>
                            {learnMoreDialog.accomplishments.second.icon}
                            <Typography variant="h3">
                              {learnMoreDialog.accomplishments.second.title}
                            </Typography>
                            <Typography variant="body2">
                              {
                                learnMoreDialog.accomplishments.second
                                  .description
                              }
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
                        <Card sx={experienceStyles.doit.card}>
                          <CardContent>
                            {learnMoreDialog.accomplishments.third.icon}
                            <Typography variant="h3">
                              {learnMoreDialog.accomplishments.third.title}
                            </Typography>
                            <Typography variant="body2">
                              {
                                learnMoreDialog.accomplishments.third
                                  .description
                              }
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
  spacingBetweenCompanyLogoCardsAndTenureDetails: {
    gap: 5,
  },
  spacingBetweenImageAndDialogItems: {
    ...RESPONSIVE_STYLING.mobileResponsiveDialogContent,
    gap: 5,
    justifyContent: "center",
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
  iconButton: {
    position: "sticky",
    top: 0,
    right: 0,
    m: 0,
    ml: "auto",
    zIndex: Z_INDICES.default,
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
    ...RESPONSIVE_STYLING.spacingBetweenAccomplishmentsCards,
    justifyContent: "space-between",
  },
  accomplishmentsHeaderGrid: {
    justifyContent: { xs: "center", md: "start" },
  },
  doit: {
    highlightedProjectsCards: {
      gap: 5, // Space between the two rows of DoIT's "Highlighted Projects"
    },
    projectsCardsRow: {
      ...RESPONSIVE_STYLING.spacingBetweenProjectsCards,
      justifyContent: "space-between",
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
    dialogHeaderImage: {
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
      ...GLOBAL_STYLING.card,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)", // Center the card
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
      ...RESPONSIVE_STYLING.spacingBetweenNDAandPRCards,
      justifyContent: "space-between",
    },
    dialogCardGrid: { display: "flex" },
    card: {
      ...GLOBAL_STYLING.card,
      height: "100%",
    },
    projectCardContent: {
      height: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
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
  forecastCard: {
    ...experienceBaseStyles.projectCard,
    backgroundImage:
      "url(./assets/sections/experience/doit/forecast95-vert.png)",
  },
  inventoryCard: {
    ...experienceBaseStyles.projectCard,
    backgroundImage: "url(./assets/sections/experience/doit/inventory95.jpg)",
  },
  courseCard: {
    ...experienceBaseStyles.projectCard,
    backgroundImage: "url(./assets/sections/experience/doit/group95.jpg)",
  },
};

export default Experience;