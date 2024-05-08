// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
//import { Container, Navbar, Nav } from "react-bootstrap";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import "../css/header.css";

// This doesn't include the first section, the "hero"
const sections = ["about", "experience", "portfolio", "contact"];
const sectionEmojis = ["📝", "🏢", "🎯", "✉️"];

const Header = () => {
  const [navBarBackground, setNavBarBackground] = useState("transparent");
  const [activeSection, setActiveSection] = useState("hero"); // "active section" = the section that's in the viewport
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  /*
   Changes the background of the navbar depending on the user's scrolling action. 
  */
  useEffect(() => {
    const handleScroll = () => {
      // FIRST: Change the background of the header
      const heroSection = document.getElementById("hero");
      const threshold = heroSection.offsetHeight;
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

  useEffect(() => {
    console.log(activeSection);
  }, [activeSection]);

  const NavContent = () => (
    <List>
      {sections.map((section) => (
        <ScrollLink
          key={section}
          to={section}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <ListItem button onClick={() => setDrawerIsOpen(false)}>
            <ListItemText
              className="navlink-font"
              primary={section.charAt(0).toUpperCase() + section.slice(1)}
            />
          </ListItem>
        </ScrollLink>
      ))}
    </List>
  );

  // Adds a light shadown on a nav link when hovering over it
  const hoverEffect = {
    transition: "all 0.3s", 
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)", // Light background change
    }
  }

  const isActive = (targetSection) => activeSection === targetSection;

  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: navBarBackground }}
      sx={{
        transition: "background-color 1s",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-around",
          paddingX: 2,
          alignItems: "center",
        }}
      >
        <ScrollLink to="hero" smooth={true} duration={500}>
          <Typography
            variant="h6"
            className="navbar-brand"
            sx={{ flexGrow: 0, paddingY: 1, color: "#2196f3", "&:hover": {
              color: "#2196f3"
            } }}
          >
            NAIF ABDULLAH
          </Typography>
        </ScrollLink>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space",
            gap: 5,
          }}
        >
          {sections.map((section) => (
            <ScrollLink key={section} to={section} smooth={true} duration={500}>
              <Button
                color={isActive(section) ? "secondary" : "primary"}
                sx={hoverEffect}
                style={{fontWeight: "bold"}}>
                {section.charAt(0).toUpperCase() +
                  section.slice(1) +
                  " " +
                  sectionEmojis[sections.indexOf(section)]}
              </Button>
            </ScrollLink>
          ))}
        </Box>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={() => setDrawerIsOpen(true)}
          sx={{ display: { xs: "block", md: "none" }, paddingY: 1 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={drawerIsOpen}
        onClose={() => setDrawerIsOpen(false)}
      >
        <NavContent />
      </Drawer>
    </AppBar>
  );
};

export default Header;
