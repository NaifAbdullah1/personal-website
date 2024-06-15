import {
  Container,
  Grid,
  Typography,
  FormControl,
  Card,
  CardContent,
  Box,
} from "@mui/material";

import {
  BACKGROUNDS,
  COLORS,
  GLOBAL_STYLING,
  RESPONSIVE_STYLING,
} from "../../constants.jsx";
import { useState } from "react";
import CustomTextField from "./CustomTextField.jsx";
import CustomButton from "./CustomButton.jsx";
import LottieAnimation from "./LottieAnimation.jsx";
import { CSSTransition } from "react-transition-group";
import "../../scss/contact.scss";

import animationData from "../../lotAn.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleChange = (eventTarget) => {
    const { name, value } = eventTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page from refreshing
    console.log("Submitted!");
    console.log(formData);

    setIsSubmitted(true); // Starts to make the form fade out
    setTimeout(() => {
      setShowAnimation(true);
    }, 1000); // Give some time for the form to fade out before rendering the animation.

    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);

    setTimeout(() => {
      setShowAnimation(false);

      setFormData({ name: "", email: "", message: "" }); // Reset form after 3 seconds
    }, 3000);
  };

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
            sx={contactStyles.parentContentGrid}
          >
            <Card sx={contactStyles.formCard}>
              <CardContent sx={contactStyles.formCardContent}>
                <CSSTransition
                  in={showAnimation}
                  timeout={1000}
                  classNames="fade"
                  unmountOnExit
                >
                  <Grid>
                    <Grid
                      item
                      sx={{
                        height: {
                          xs: "314.08px",
                          //sm: "314.08px",
                        },
                        width: "auto",
                      }}
                    >
                      <LottieAnimation animationData={animationData} />
                    </Grid>
                    <Typography variant="h3">Message Sent!</Typography>
                  </Grid>
                </CSSTransition>

                <CSSTransition
                  in={!isSubmitted}
                  timeout={1000}
                  classNames="fade"
                  unmountOnExit
                >
                  <form onSubmit={handleSubmit}>
                    <FormControl fullWidth margin="normal">
                      <CustomTextField
                        label="Name"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        onChange={(event) => handleChange(event.target)}
                        helperText="What should I call you?"
                        FormHelperTextProps={{
                          sx: { color: COLORS.lightGray },
                        }}
                      />
                    </FormControl>

                    <FormControl fullWidth margin="normal">
                      <CustomTextField
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={(event) => handleChange(event.target)}
                        helperText="We'll never share your email."
                        FormHelperTextProps={{
                          sx: { color: COLORS.lightGray },
                        }}
                      />
                    </FormControl>

                    <FormControl fullWidth margin="normal">
                      <CustomTextField
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={(event) => handleChange(event.target)}
                        multiline
                      />
                    </FormControl>

                    <Box
                      sx={{
                        mt: 2,
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <CustomButton type="submit" variant="outlined">
                        Send Message
                      </CustomButton>
                    </Box>
                  </form>
                </CSSTransition>
              </CardContent>
            </Card>
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
  parentContentGrid: {
    ...GLOBAL_STYLING.spacingBetweenSubsections,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formCard: {
    ...GLOBAL_STYLING.card,
    mb: 10,
    width: "100%", // Prevents the card's width from shrinking when the Lottie animation is ran
  },
  formCardContent: {
    // Helps us center the form's text fields and the animation when ran
    display: "flex", // TODO: BIG NOTE HERE, REMOVING THOSE WILL EAT UP THE MARGINS, IT WILL ALSO CAUSE THE SPLIT SECOND RENDER. MAYBE THE SOLUTION WITH THE SPLIT SECOND RENDER ON ANIMATION LOADING HAS TO DO WITH STYLING?
    justifyContent: "center",
    alignItems: "center",
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: COLORS.lightGray,
      },
      "&:hover fieldset": {
        borderColor: COLORS.lightGray,
      },
      "&.Mui-focused fieldset": {
        borderColor: "primary.main",
      },
    },
  },
};

export default Contact;
