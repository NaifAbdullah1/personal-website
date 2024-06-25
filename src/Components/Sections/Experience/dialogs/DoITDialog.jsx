import { useState, useMemo, useEffect } from "react";

import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
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
  Lock as LockIcon,
  Verified as VerifiedIcon,
  ContentPasteSearch as ContentPasteSearchIcon,
  MarkUnreadChatAlt as MarkUnreadChatAltIcon,
  LocalPolice as LocalPoliceIcon,
  School as SchoolIcon,
  Diversity3 as Diversity3Icon,
  AutoFixHigh as AutoFixHighIcon,
} from "@mui/icons-material";

import PropTypes from "prop-types";
import {
  GLOBAL_STYLING,
  Z_INDICES,
  COLORS,
  RESPONSIVE_STYLING,
} from "../../../../constants";

import React from "react";
import Slide from "@mui/material/Slide";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DoITDialog = ({ cardId, isOpen }) => {
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
        "./assets/sections/experience/doit/forecast80-horizontal.webp",
      overlayImageAltText: "Financial Forecasting Background",
      overlayTitle: "Financial Forecasting System",
      projectRole:
        "I automated the process of budget forecasting by developing an advanced budgeting system. I integrated various APIs to retrieve employee pay and scheduling data, enabling precise cost calculations and providing managers with comprehensive financial insights for enhanced budget forecasting and fiscal control.",
      accomplishments: {
        first: {
          icon: <AttachMoneyIcon sx={extendedStyles.accomplishmentsIcon} />,
          title: "Streamlined Budgeting Process",
          description:
            "This system I developed has eliminated the need for manual data entry and calculations, thereby streamlining the budgeting process and significantly reducing errors. This automation led to increased efficiency and accuracy in financial data management.",
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
            "Introduced advanced analytics capabilities that improved fiscal control. This innovation offered comprehensive financial insights and helped the department make more informed financial decisions, leading to more efficient budget planning and resource allocation.",
        },
      },
    };

    const inventoryManagementSystem = {
      overlayImage:
        "./assets/sections/experience/doit/inventory80-horizontal.webp",
      overlayImageAltText: "Inventory Management Background",
      overlayTitle: "Inventory Management System",
      projectRole:
        "I designed and implemented a database schema to link employees to issued equipment using foreign keys, developed automated scripts to send equipment return reminders, and integrated the system into our existing infrastructure to streamline asset tracking and reduce equipment loss. The automated solution links issued equipment to employees, sends automatic return reminders, and improves compliance with departmental policies, reducing equipment loss and manual tracking efforts.",
      accomplishments: {
        first: {
          icon: (
            <ContentPasteSearchIcon sx={extendedStyles.accomplishmentsIcon} />
          ),
          title: "Automated Asset Tracking",
          description:
            "Automated asset tracking by linking issued equipment to employee records via a database schema using foreign keys. This automation reduced manual tracking efforts and enhanced the accuracy of asset management.",
        },
        second: {
          icon: (
            <MarkUnreadChatAltIcon sx={extendedStyles.accomplishmentsIcon} />
          ),
          title: "Equipment Return Reminders",
          description:
            "Implemented an automated reminder system that issued equipment return notifications to employees at the end of their tenure. This proactive measure mitigated equipment loss, ensuring timely equipment returns and safeguarding departmental resources.",
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
      overlayImage: "./assets/sections/experience/doit/group80-horizontal.webp",
      overlayImageAltText: "Group meeting",
      overlayTitle: "ReactJS Training Course",
      projectRole:
        "I designed a comprehensive ReactJS training course, assessing team's skill levels, crafting a tailored curriculum, and using interactive teaching methods to standardize our web development approach, ultimately boosting team efficiency and code quality. This training initiative was designed to unify the team's approach to web development. It incorporated interactive elements like peer-to-peer learning, practical exercises, and live coding sessions, resulting in improved team efficiency and code quality.",
      accomplishments: {
        first: {
          icon: <Diversity3Icon sx={extendedStyles.accomplishmentsIcon} />,
          title: "Boosted Team Efficiency",
          description:
            "The ReactJS training course significantly enhanced team efficiency and code quality, resulting in faster project completion times and establishing a standardized framework for web development, driving success across projects.",
        },
        second: {
          icon: <AutoFixHighIcon sx={extendedStyles.accomplishmentsIcon} />,
          title: "Interactive Learning Experience",
          description:
            "I leveraged previous teaching experience to employ diverse teaching methods such as peer-to-peer learning, practical exercises, and code challenges. This fostered effective learning outcomes among team members, which translated in faster project turnaround times.",
        },
        third: {
          icon: <SchoolIcon sx={extendedStyles.accomplishmentsIcon} />,
          title: "Tailored Curriculum Design",
          description:
            "This ReactJS training program tailored to the varied experience levels of the development team, covering essential topics such as HTTP requests, component creation, and inter-component communication, cookie management, and so much more. The curriculum ensured a unified approach to web development.",
        },
      },
    };

    return {
      financialForecastingSystem,
      inventoryManagementSystem,
      reactJsCourse,
    };
  }, []);

  useEffect(() => {
    if (doitCards[cardId]) {
      setLearnMoreDialog({
        isOpen: isOpen,
        overlayImage: doitCards[cardId].overlayImage,
        overlayImageAltText: doitCards[cardId].overlayImageAltText,
        overlayTitle: doitCards[cardId].overlayTitle,
        projectRole: doitCards[cardId].projectRole,
        accomplishments: doitCards[cardId].accomplishments,
      });
    }
  }, [cardId, doitCards, isOpen]); // TODO: Why are we warned to include "doitCard"? cardId makes sense, but the latter doesn't

  DoITDialog.propTypes = {
    cardId: PropTypes.string,
    isOpen: PropTypes.bool,
  };

  return (
    <Dialog
      open={learnMoreDialog.isOpen}
      TransitionComponent={Transition}
      aria-labelledby="Learn more about the project"
      aria-describedby="Dialog of clicked project"
      onClose={() =>
        setLearnMoreDialog({
          ...learnMoreDialog,
          isOpen: false,
          cardId: "",
        })
      }
      fullScreen={fullScreenDialog}
      maxWidth="lg"
    >
      <DialogContent sx={dialogStyles.learnMoreDialogContent}>
        <IconButton
          aria-label="Close"
          onClick={() =>
            setLearnMoreDialog({
              ...learnMoreDialog,
              isOpen: false,
              cardId: "",
            })
          }
          sx={dialogStyles.iconButton}
        >
          <CloseIcon fontSize="large" sx={GLOBAL_STYLING.closeIcon} />
        </IconButton>

        <Grid container sx={dialogStyles.spacingBetweenImageAndDialogItems}>
          {/*Image and Card Overlay here*/}
          <Grid item container sx={dialogStyles.dialogImageParentGrid}>
            <Box
              component="img"
              src={learnMoreDialog.overlayImage}
              alt={learnMoreDialog.overlayImageAltText}
              sx={dialogStyles.dialogHeaderImage}
            />
            <Grid sx={dialogStyles.dialogOverlayCardGrid}>
              <Card sx={dialogStyles.dialogCardOverlay}>
                <CardContent sx={dialogStyles.overlayCardContent}>
                  <Typography variant="h2" sx={dialogStyles.cardTitle}>
                    {learnMoreDialog.overlayTitle}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid item container sx={dialogStyles.dialogContentBelowImageGrid}>
            <Grid
              item
              container
              sx={dialogStyles.dialogNDAandPRCardsParentGrid}
            >
              <Grid item xs={12} md={5} sx={dialogStyles.dialogCardGrid}>
                <Card sx={dialogStyles.card}>
                  <CardContent>
                    <LockIcon color="error" sx={extendedStyles.lockIcon} />
                    <Typography variant="h2">
                      Non-Disclosure Agreement
                    </Typography>

                    <Typography variant="body2">
                      Due to the sensitive nature of this project, I am unable
                      to disclose specific details. However, I can provide a
                      high-level overview of my responsibilities and the
                      project&apos;s outcomes.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={5} sx={dialogStyles.dialogCardGrid}>
                <Card sx={dialogStyles.card}>
                  <CardContent>
                    <BusinessCenterIcon
                      sx={extendedStyles.businessCenterIcon}
                    />
                    <Typography variant="h2">Project Role</Typography>
                    <Typography variant="body2">
                      {learnMoreDialog.projectRole}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid item container sx={dialogStyles.accomplishmentsGrid}>
              <Grid container sx={dialogStyles.accomplishmentsHeaderGrid}>
                <Typography variant="h2">Accomplishments:</Typography>
              </Grid>
              <Grid item container sx={dialogStyles.accomplishmentsCardsRow}>
                <Grid item xs={12} md={3.5} sx={dialogStyles.dialogCardGrid}>
                  <Card sx={dialogStyles.card}>
                    <CardContent>
                      {learnMoreDialog.accomplishments.first.icon}
                      <Typography variant="h2">
                        {learnMoreDialog.accomplishments.first.title}
                      </Typography>
                      <Typography variant="body2">
                        {learnMoreDialog.accomplishments.first.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={3.5} sx={dialogStyles.dialogCardGrid}>
                  <Card sx={dialogStyles.card}>
                    <CardContent>
                      {learnMoreDialog.accomplishments.second.icon}
                      <Typography variant="h2">
                        {learnMoreDialog.accomplishments.second.title}
                      </Typography>
                      <Typography variant="body2">
                        {learnMoreDialog.accomplishments.second.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={3.5} sx={dialogStyles.dialogCardGrid}>
                  <Card sx={dialogStyles.card}>
                    <CardContent>
                      {learnMoreDialog.accomplishments.third.icon}
                      <Typography variant="h2">
                        {learnMoreDialog.accomplishments.third.title}
                      </Typography>
                      <Typography variant="body2">
                        {learnMoreDialog.accomplishments.third.description}
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
  );
};

const dialogStyles = {
  learnMoreDialogContent: {
    backgroundColor: COLORS.dialogBackground,
    display: "flex",
    flexDirection: "column",
    gap: 0,
    pt: 0,
    pl: 0,
    pr: 0,
  },
  iconButton: {
    position: "sticky",
    top: 0,
    right: 0,
    m: 0,
    ml: "auto",
    zIndex: Z_INDICES.default,
  },
  spacingBetweenImageAndDialogItems: {
    ...RESPONSIVE_STYLING.mobileResponsiveDialogContent,
    gap: 5,
    justifyContent: "center",
  },
  dialogHeaderImage: {
    width: "100%",
    height: "auto",
  },
  dialogImageParentGrid: {
    // This parent grid is needed to center the card in the middle of the image
    position: "relative",
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
  dialogContentBelowImageGrid: {
    width: "75%",
    gap: 10,
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
  accomplishmentsGrid: {
    gap: 3,
  },
  accomplishmentsHeaderGrid: {
    justifyContent: { xs: "center", md: "start" },
  },
  accomplishmentsCardsRow: {
    ...RESPONSIVE_STYLING.spacingBetweenAccomplishmentsCards,
    justifyContent: "space-between",
  },
};

const experienceBaseStyles = {
  iconSizing: { width: "50px", height: "auto" },
};

const extendedStyles = {
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

export default DoITDialog;
