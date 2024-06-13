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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
            sx={GLOBAL_STYLING.spacingBetweenSubsections}
          >
            <Card sx={GLOBAL_STYLING.card}>
              <CardContent>
                <form onSubmit={(event) => handleSubmit(event)}>
                  <FormControl fullWidth margin="normal">
                    <CustomTextField
                      label="Name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(event) => handleChange(event.target)}
                      helperText="What should I call you?"
                      FormHelperTextProps={{ sx: { color: COLORS.lightGray } }}
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
                      FormHelperTextProps={{ sx: { color: COLORS.lightGray } }}
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
                    sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}
                  >
                    <CustomButton type="submit" variant="outlined">
                      Send Message
                    </CustomButton>
                  </Box>
                </form>
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
