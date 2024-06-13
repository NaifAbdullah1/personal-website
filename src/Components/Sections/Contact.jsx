import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

import { useState } from "react";

import { motion } from "framer-motion";

import {
  BACKGROUNDS,
  GLOBAL_STYLING,
  RESPONSIVE_STYLING,
} from "../../constants.jsx";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const formVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.5, duration: 0.5 } },
};

const buttonVariants = {
  hover: { scale: 1.05, transition: { yoyo: Infinity, duration: 0.3 } },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
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
            <Container maxWidth="sm" sx={{ mt: 5 }}>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <Card sx={{ boxShadow: 3 }}>
                  <motion.div
                    variants={formVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <CardContent>
                      <Typography variant="h4" gutterBottom align="center">
                        Contact Us
                      </Typography>
                      <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              fullWidth
                              label="Message"
                              name="message"
                              multiline
                              rows={4}
                              value={formData.message}
                              onChange={handleChange}
                              required
                            />
                          </Grid>
                        </Grid>
                        <CardActions sx={{ justifyContent: "center", mt: 2 }}>
                          <motion.div
                            variants={buttonVariants}
                            whileHover="hover"
                          >
                            <Button
                              type="submit"
                              variant="contained"
                              color="primary"
                              sx={{ borderRadius: 5, px: 4 }}
                            >
                              Send
                            </Button>
                          </motion.div>
                        </CardActions>
                      </form>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            </Container>
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
