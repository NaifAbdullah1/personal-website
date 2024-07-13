import { useEffect, useState } from "react";

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
  Lock as LockIcon,
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

const DoITDialog = ({ isOpen }) => {
  const [dialogDetails, setDialogDetails] = useState({
    isOpen: false,
    overlayImage:
      "./assets/sections/experience/smucker/droid-logo-inverted -banner.png",
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

  useEffect(() => {
    setDialogDetails((prev) => ({
      ...prev,
      isOpen: isOpen,
    }));
  }, [isOpen]);

  DoITDialog.propTypes = {
    cardId: PropTypes.string,
    isOpen: PropTypes.bool,
  };

  return (
    <Dialog
      open={dialogDetails.isOpen}
      TransitionComponent={Transition}
      aria-labelledby="Learn more about the project"
      aria-describedby="Dialog of clicked project"
      onClose={() =>
        setDialogDetails({
          ...dialogDetails,
          isOpen: false,
          cardId: "",
        })
      }
      fullScreen={fullScreenDialog}
      maxWidth="md"
    >
      <DialogContent sx={dialogStyles.learnMoreDialogContent}>
        <IconButton
          aria-label="Close"
          onClick={() =>
            setDialogDetails({
              ...dialogDetails,
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
              src={dialogDetails.overlayImage}
              alt={dialogDetails.overlayImageAltText}
              sx={dialogStyles.dialogHeaderImage}
            />
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
                      {dialogDetails.projectRole}
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
                      {dialogDetails.accomplishments.first.icon}
                      <Typography variant="h2">
                        {dialogDetails.accomplishments.first.title}
                      </Typography>
                      <Typography variant="body2">
                        {dialogDetails.accomplishments.first.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={3.5} sx={dialogStyles.dialogCardGrid}>
                  <Card sx={dialogStyles.card}>
                    <CardContent>
                      {dialogDetails.accomplishments.second.icon}
                      <Typography variant="h2">
                        {dialogDetails.accomplishments.second.title}
                      </Typography>
                      <Typography variant="body2">
                        {dialogDetails.accomplishments.second.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={3.5} sx={dialogStyles.dialogCardGrid}>
                  <Card sx={dialogStyles.card}>
                    <CardContent>
                      {dialogDetails.accomplishments.third.icon}
                      <Typography variant="h2">
                        {dialogDetails.accomplishments.third.title}
                      </Typography>
                      <Typography variant="body2">
                        {dialogDetails.accomplishments.third.description}
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
