// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
//import { Container, Navbar, Nav } from "react-bootstrap";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import "../css/header.css";

const sections = ["hero", "about", "experience", "portfolio", "contact"];

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
      const threshold = heroSection.offsetHeight;
      if (window.scrollY > threshold) {
        setNavBarBackground("#1f22259a"); // Light grey
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

  const isActive = (targetSection) =>
    activeSection === targetSection;

  /*const navBarColor = navBarBackground === "transparent" ? "primary" : "bg-lightslategrey";*/

  return (
    <AppBar position="fixed" 
      style={{backgroundColor: navBarBackground}}
      sx={{
        transition: 'background-color 1s', 
        boxShadow: "none"
      }}
    >
      <Toolbar>
        {sections.map((section) => (
          <ScrollLink
            key={section}
            to={section}
            smooth={true}
            duration={500}
          >
            <Button color={isActive(section) ? "secondary" : "primary"}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          </ScrollLink>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
