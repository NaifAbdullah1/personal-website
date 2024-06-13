import {
  Container,
  Grid,
  Typography,
  FormControl,
  FormHelperText,
  Card,
  CardContent,
  TextField,
} from "@mui/material";

import {
  BACKGROUNDS,
  COLORS,
  GLOBAL_STYLING,
  RESPONSIVE_STYLING,
} from "../../constants.jsx";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log();
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
                <form onSubmit={handleSubmit}>
                  <FormControl fullWidth margin="normal">
                    <TextField
                      label="Name"
                      variant="outlined"
                      name="name"
                      helperText={
                        <FormHelperText sx={{ color: COLORS.lightGray }}>
                          What should I call you?
                        </FormHelperText>
                      }
                      value={formData.name}
                    />
                  </FormControl>

                  <FormControl fullWidth margin="normal">
                    <TextField
                      label="Email address"
                      variant="outlined"
                      name="emailAddress"
                      helperText={
                        <FormHelperText sx={{ color: COLORS.lightGray }}>
                          We&apos;ll never share your email.
                        </FormHelperText>
                      }
                      value={formData.email}
                    />
                  </FormControl>

                  <FormControl fullWidth margin="normal">
                    <TextField
                      label="Message"
                      variant="outlined"
                      name="messageBody"
                      value={formData.message}
                    />
                  </FormControl>
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
};

export default Contact;
