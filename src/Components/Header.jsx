// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../css/header.css";

const Header = () => {
  const [navBarBackground, setNavBarBackground] = useState("transparent");

  /*
   Changes the background of the navbar depending on the user's scrolling action. 
  */
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      const threshold = heroSection.offsetHeight;

      if (window.scrollY > threshold) {
        setNavBarBackground("light");
      } else {
        setNavBarBackground("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <Nav.Link href="#about">About 📝</Nav.Link>
            <Nav.Link href="#experience">Experience 🏢</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio 🎯</Nav.Link>
            <Nav.Link href="#contact">Contact ✉️</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
