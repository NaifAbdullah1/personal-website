// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { COLORS, FONTS } from "../constants.jsx";

// This doesn't include the first section, the "hero"
const sections = ["about", "experience", "portfolio", "contact"];
const sectionEmojis = ["📝", "🏢", "🎯", "✉️"];

const Header = () => {
  const [navBarBackground, setNavBarBackground] = useState("transparent");
  const [activeSection, setActiveSection] = useState("hero"); // "active section" = the section that's in the viewport

  /*
   Changes the background of the navbar depending on the user's scrolling action. 
  */
  const handleScroll = useCallback(() => {
    // FIRST: Change the background of the header
    const heroSection = document.getElementById("hero");
    const threshold = heroSection.offsetHeight - 800; // -800 to make the color change a bit early
    setNavBarBackground(
      window.scrollY > threshold
        ? COLORS.grayBlurBackground.backgroundColor
        : "transparent"
    );
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
  }, [activeSection]);

  // Debouncing the scroll event listener to prevent redundant checks of scroll position
  useEffect(() => {
    const handleScrollDebounced = debounce(handleScroll, 100);
    window.addEventListener("scroll", handleScrollDebounced);
    return () => {
      window.removeEventListener("scroll", handleScrollDebounced);
    };
  }, [handleScroll]);

  const isActive = useCallback(
    (targetSection) => activeSection === targetSection,
    [activeSection]
  );
  return (
    <AppBar
      position="fixed"
      sx={{ ...headerStyles.appBar, backgroundColor: navBarBackground }}
    >
      <Toolbar sx={headerStyles.toolbar}>
        <ScrollLink to="hero" smooth={true} duration={500}>
          <Typography variant="h6" sx={headerStyles.brand}>
            NAIF ABDULLAH
          </Typography>
        </ScrollLink>

        <Box sx={headerStyles.navLinksBox}>
          {sections.map((section) => (
            <ScrollLink key={section} to={section} smooth={true} duration={500}>
              <Button
                sx={{
                  ...headerStyles.navLinks,
                  color: isActive(section) ? COLORS.purple : COLORS.lightBlue,
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

/**
 * Debouncing the scroll event listener so optimize performance
 * @param {*} func a callback function to debounce
 * @param {*} wait how long (in ms) before running the function
 * @returns
 */
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const headerStyles = {
  appBar: {
    transition: "background-color 1s",
    ...COLORS.grayBlurBackground,
  },
  toolbar: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-around",
    alignItems: "center",
    paddingX: 2,
    paddingBottom: { xs: 1, sm: 0 },
  },
  brand: {
    fontWeight: 900,
    lineHeight: 1.5,
    fontFamily: FONTS.cursive,
    flexGrow: 0,
    paddingY: 1,
    color: COLORS.lightBlue,
    "&:hover": {
      color: COLORS.lightBlue, //Counteracting the color change that occurs with the brand name on hover.
    },
  },
  navLinksBox: {
    display: "flex",
    alignItems: { xs: "center", sm: "initial" }, // Center items for smaller screens
    gap: { xs: "1.5rem", sm: "1rem", md: "3rem" }, // Increased gap for smaller screens
  },
  navLinks: {
    ...COLORS.buttonHoverEffect,
    fontWeight: "bold",
    fontSize: { xs: "0.7rem", md: "1rem" },
    whiteSpace: "nowrap",
  },
};

export default Header;
