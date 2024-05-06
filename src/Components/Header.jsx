// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../css/header.css";

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
        setNavBarBackground("light");
      } else {
        setNavBarBackground("transparent");
      }
      //----------------------------------

      // SECOND: Synchronize header's NavLinks with the current section
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY;

      // Loop through the sections to find the one being viewed
      let currentSection = "hero"; // because it's the default

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
      //----------------------------------
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (targetSection) => {
    return activeSection === targetSection ? "active" : ""
  }

  const navBarClass =
    navBarBackground === "transparent" ? "" : "bg-lightslategrey";

  return (
    <Navbar
      fixed="top"
      variant="dark"
      expand="sm"
      className={`header-navbar ${navBarClass}`}
    >
      <Container>
        <Navbar.Brand href="#home">Naif Abdullah</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#about"
              className={isActive("about")}>
              About 📝
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={isActive("experience")}
            >
              Experience 🏢
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={isActive("portfolio")}
            >
              Portfolio 🎯
            </Nav.Link>
            <Nav.Link 
              href="#contact"
              className={isActive("contact")}>
              Contact ✉️
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
