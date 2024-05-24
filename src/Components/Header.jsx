// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
//import { Container, Navbar, Nav } from "react-bootstrap";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import "../scss/header.scss";

// This doesn't include the first section, the "hero"
const sections = ["about", "experience", "portfolio", "contact"];
const sectionEmojis = ["📝", "🏢", "🎯", "✉️"];

// Adds a light shadown on a nav link when hovering over it
const hoverEffect = {
  transition: "all 0.3s", 
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Light background change
  }
}

const Header = () => {
  const [navBarBackground, setNavBarBackground] = useState("transparent");
  const [activeSection, setActiveSection] = useState("hero"); // "active section" = the section that's in the viewport

  /*
   Changes the background of the navbar depending on the user's scrolling action. 
  */
  useEffect(() => {
    const handleScroll = () => {
      // FIRST: Change the background of the header
      const heroSection = document.getElementById("hero");
      const threshold = heroSection.offsetHeight-800; // -800 to make the color change a bit early
      if (window.scrollY > threshold) {
        setNavBarBackground("#1f22259a "); // Light grey #1f22259a
      } else {
        setNavBarBackground("transparent");
      }
      //----------------------------------

      // SECOND: Synchronize header's NavLinks with the current section{
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY;
      // Loop through the sections to find the one being viewed
      let newActiveSection = "hero"; // because it's the default
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
          newActiveSection = section.id;
        }
      });
      // Update activeSection based on scroll position (if different)
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
      //----------------------------------
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const isActive = (targetSection) => activeSection === targetSection;

  

  return (
    <AppBar
      position="fixed"
      style={{ 
        backgroundColor: navBarBackground,
        backdropFilter: "blur(5px)", 
        WebkitBackdropFilter: "blur(5px)",
      }}
      sx={{
        transition: "background-color 1s",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-around",
          paddingX: 2,
          paddingBottom: {xs: 1, sm: 0},
          alignItems: "center",
          display: "flex",
          flexDirection: {xs: "column", sm: "row"}
        }}
      >
        <ScrollLink to="hero" smooth={true} duration={500}>
          <Typography
            variant="h6"
            className="navbar-brand"
            sx={{ fontFamily: "'Kaushan Script', cursive", flexGrow: 0, paddingY: 1, color: "#2196f3", "&:hover": {
              color: "#2196f3" //Counteracting the color change that occurs with the brand name on hover.
            } }}
          >
            NAIF ABDULLAH
          </Typography>
        </ScrollLink>

        <Box
          sx={{
            display: "flex",
            gap: { xs: "1.5rem", sm: "1rem", md: "3rem" }, // Increased gap for smaller screens
            alignItems: { xs: "center", sm: "initial" }, // Center items for smaller screens
          }}
        >
          {sections.map((section) => (
            <ScrollLink key={section} to={section} smooth={true} duration={500}>
              <Button
                color={isActive(section) ? "secondary" : "primary"}
                sx={{...hoverEffect, 
                  fontWeight: "bold", 
                  fontSize: {xs: "0.7rem", sm: "0.7rem", md: "1rem"}
                }}
              >
                {section.charAt(0).toUpperCase() +
                  section.slice(1) +
                  " " +
                  sectionEmojis[sections.indexOf(section)]}
              </Button>
            </ScrollLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
