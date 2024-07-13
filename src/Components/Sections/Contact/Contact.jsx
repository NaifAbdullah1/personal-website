import {
  Container,
  Grid,
  Typography,
  FormControl,
  Card,
  CardContent,
  Box,
  CircularProgress,
} from "@mui/material";

import {
  BACKGROUNDS,
  COLORS,
  GLOBAL_STYLING,
  RESPONSIVE_STYLING,
} from "../../../constants.jsx";
import { useState } from "react";
import CustomTextField from "./CustomTextField.jsx";
import CustomButton from "./CustomButton.jsx";
import Lottie from "react-lottie-player";
import { CSSTransition } from "react-transition-group";
import emailjs from "@emailjs/browser";

import "../../../scss/transition-animation.scss";

import successAnimation from "../../../lottie-animations/Success.json";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    error: {
      isNameError: false,
      isEmailError: false,
      isMessageError: false,
    },
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Whether the user has clicked the "Send Message" button in the contact form
  const [showAnimation, setShowAnimation] = useState(false); // Start fading in the animation.
  const [stabilizeCardHeight, setStabilizeCardHeight] = useState("");
  const [sendingEmailInProgress, setSendingEmailInProgress] = useState("");

  const namePattern = /^(?=.{1,})(?!^\s+$)[A-Za-z\s-]+$/;
  // Matches if it contains only alphabet (capital or small letters) and/or hyphens (but no lone hyphens)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const messagePattern = /^(?=.*\S)[\s\S]+$/; // Matches if it contains at least one non-whitespace character.

  const handleChange = (eventTarget) => {
    const { name, value } = eventTarget;
    setFormData({
      ...formData,
      [name]: value,
      error: {
        isNameError:
          name === "name"
            ? !namePattern.test(value)
            : formData.error.isNameError,
        isEmailError:
          name === "email"
            ? !emailPattern.test(value)
            : formData.error.isEmailError,
        isMessageError:
          name === "message"
            ? !messagePattern.test(value)
            : formData.error.isMessageError,
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page from refreshing

    let isNameError = !namePattern.test(formData.name);
    let isEmailError = !emailPattern.test(formData.email);
    let isMessageError = !messagePattern.test(formData.message);

    // Although we can simply do {...formData, [REST_OF_ATTRIBUTES]}, it's recommended to use the function form below because it gives you the most up to date values from the formData
    setFormData((prevFormData) => ({
      ...prevFormData,
      error: {
        isNameError: isNameError,
        isEmailError: isEmailError,
        isMessageError: isMessageError,
      },
    }));

    if (isNameError || isEmailError || isMessageError) {
      return;
    } else {
      setSendingEmailInProgress(true);
    }

    emailjs.init("KfYaBNTYu2G023mwM"); // Obtained from my EmailJS dashboard

    emailjs
      .send(
        "service_03dtbvt",
        "template_st7yfqd",
        {
          from_name: formData.name.trim(),
          reply_to: formData.email.trim(),
          message: formData.message.trim(),
        },
        "KfYaBNTYu2G023mwM"
      )
      .then(() => {
        setIsSubmitted(true); // Starts to make the form fade out
        setTimeout(() => {
          setShowAnimation(true);
        }, 1000); // Give some time for the form to fade out before rendering the animation.

        setTimeout(() => {
          setIsSubmitted(false);
        }, 4500);

        setTimeout(() => {
          setSendingEmailInProgress(false);
          setShowAnimation(false);

          setFormData({
            name: "",
            email: "",
            message: "",
            error: {
              isNameError: false,
              isEmailError: false,
              isMessageError: false,
            },
          }); // No need to reset form because email was successful.
        }, 3000);
      })
      .catch((error) => {
        alert("Failed to send email. Please try again later.", error);
      });
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
            <Grid container sx={contactStyles.contactCallToAction}>
              <Typography variant="h2">Collaboration opportunities:</Typography>
              <Typography variant="body1">
                Keen to partner on transformative initiatives? Let&apos;s
                explore mutual interests and connect!
              </Typography>
            </Grid>
            <Card
              sx={{
                ...contactStyles.formCard,
                height: stabilizeCardHeight ? "395.812px" : "auto",
              }}
            >
              <CardContent sx={contactStyles.formCardContent}>
                <CSSTransition
                  in={showAnimation}
                  timeout={1000}
                  classNames="fade"
                  unmountOnExit
                >
                  <Grid>
                    <Grid item sx={contactStyles.animationParentGrid}>
                      <Lottie
                        play
                        animationData={successAnimation}
                        loop={false}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </Grid>
                    <Typography variant="h2">Message Sent!</Typography>
                  </Grid>
                </CSSTransition>

                <CSSTransition
                  in={!isSubmitted}
                  timeout={1000}
                  classNames="fade"
                  unmountOnExit
                  onExited={() => setStabilizeCardHeight(true)}
                  onEntered={() => setStabilizeCardHeight(false)}
                >
                  <form onSubmit={handleSubmit} aria-label="contact-form">
                    <FormControl fullWidth margin="normal">
                      <CustomTextField
                        label="Name"
                        name="name"
                        autoComplete="name"
                        value={formData.name}
                        error={formData.error.isNameError}
                        onChange={(event) => handleChange(event.target)}
                        helperText="What should I call you?"
                        FormHelperTextProps={contactStyles.fieldsHelperText}
                      />
                    </FormControl>

                    <FormControl fullWidth margin="normal">
                      <CustomTextField
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={formData.email}
                        error={formData.error.isEmailError}
                        onChange={(event) => handleChange(event.target)}
                        helperText="We'll never share your email."
                        FormHelperTextProps={contactStyles.fieldsHelperText}
                      />
                    </FormControl>

                    <FormControl fullWidth margin="normal">
                      <CustomTextField
                        multiline
                        label="Message"
                        name="message"
                        value={formData.message}
                        error={formData.error.isMessageError}
                        onChange={(event) => handleChange(event.target)}
                      />
                    </FormControl>

                    <Box sx={contactStyles.buttonBox}>
                      {sendingEmailInProgress ? (
                        <Grid
                          item
                          container
                          sx={contactStyles.circularProgressGrid}
                        >
                          <CircularProgress
                            size={36.5}
                            sx={contactStyles.circularProgress}
                          />
                        </Grid>
                      ) : (
                        <CustomButton type="submit" variant="outlined">
                          Send Message
                        </CustomButton>
                      )}
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
    gap: 5,
    display: "flex",
    justifyContent: "start",
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
  animationParentGrid: {
    height: "314.08px",
  },
  fieldsHelperText: {
    sx: { color: COLORS.lightGray },
  },
  buttonBox: {
    mt: 2,
    display: "flex",
    justifyContent: "flex-end", // To get the button aligned to the right of the container
  },
  circularProgressGrid: {
    // This is so that the circular progress animation sits in the center of where the "Send Message" button is located.
    width: "127.469px", // "Send Message" button's width
    justifyContent: "center",
  },
  circularProgress: { color: COLORS.lightBlue },
  contactCallToAction: {
    ...RESPONSIVE_STYLING.mobileResponsiveTextAlignment,
    justifyContent: { xs: "center", sm: "start" },
  },
};

export default Contact;
