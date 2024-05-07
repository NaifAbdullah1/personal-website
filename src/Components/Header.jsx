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
      setTimeout(() => {
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
        // Check if scrolled away from previously active section

        // Update activeSection based on scroll position (if different)
        if (newActiveSection !== activeSection) {
          setActiveSection(newActiveSection);
        }
      }, 50);

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

  const isActive = (targetSection) => {
    return activeSection === targetSection ? "active" : "";
  };

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
        <Navbar.Brand href="#hero" onClick={() => setActiveSection("hero")}>
          Naif Abdullah
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#about"
              className={isActive("about")}
              onClick={() => setActiveSection("about")}
            >
              About 📝
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={isActive("experience")}
              onClick={() => setActiveSection("experience")}
            >
              Experience 🏢
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              className={isActive("portfolio")}
              onClick={() => setActiveSection("portfolio")}
            >
              Portfolio 🎯
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={isActive("contact")}
              onClick={() => setActiveSection("contact")}
            >
              Contact ✉️
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
