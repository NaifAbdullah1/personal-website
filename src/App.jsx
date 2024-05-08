/*
- On mobile width, make the nav links a drawer. Or have the website content get pushed down. Or give it a background color.

- You might need this, this can help in making a marquee: https://www.react-fast-marquee.com/


- When you're done, see if you can consolidate your css files

- Investigate ways to simplify the Header.jsx code. Make a backup copy and a commit first

- Determine a minimum width for the site. Do this once you've almost done with implementing the site
*/

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import Header from "./Components/Header.jsx";
import Loading from "./Components/LoadingScreen.jsx";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [fadeWebsiteContentIn, setFadeWebsiteContentIn] = useState(false);
  
  const handleLoadingComplete = () => {
    // This runs after the loading logo fades out
    setLoadingComplete(true);
    // Now, we'll fade in the website's contents
    setTimeout(() => {
      setFadeWebsiteContentIn(true);
    }, 1000);
  };

  // Disabling scrolling when website contents are fading in
  useEffect(() => {
    // Adding a class to the DOM that disables scrolling
    document.body.classList.add("disable-scroll");
    // Re-enable scrolling after a set period (e.g., 3 seconds)
    const enableScrollTimeout = setTimeout(() => {
      document.body.classList.remove("disable-scroll");
    }, 7000);

    return () => {
      clearTimeout(enableScrollTimeout);
      document.body.classList.remove("disable-scroll"); // Cleanup on component unmount
    };
  }, []); // Empty dependency array to run only on component mount
  
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "white",
          zIndex: 99999,
        }}
        outerStyle={{
          border: "3px solid white",
          zIndex: 99999,
        }}
      />
      {!loadingComplete ? (
        <>
          <Loading onComplete={handleLoadingComplete} />
        </>
      ) : (
        <>
          <div
            id="parent-container"
            className={fadeWebsiteContentIn ? "fade-in" : "fade-out"}
          >
            <Header />
            <section id="hero">
              <Container fluid className="hero-container">
                <Row
                  className="d-flex align-items-center align-content-center"
                  style={{ height: "1080px" }}
                >
                  <Col xs={12} md={6} className="intro-text">
                    <div>
                      <h1 className="tagline">
                        Solving Complex Problems with&nbsp;
                        <TypeAnimation
                          sequence={[
                            // Same substring at the start will only be typed out once, initially
                            "Technology",
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            "Innovation",
                            2000,
                            "Intellect",
                            2000,
                            "Creativity",
                            2000,
                          ]}
                          wrapper="span"
                          cursor={false}
                          speed={20}
                          className="tagline"
                          style={{ color: "#66a4e1", fontFamily: "'Kaushan Script', cursive" }} 
                          repeat={Infinity}
                        />
                      </h1>
                    </div>
                  </Col>

                  <Col xs={12} md={6} className="logo-col">
                    <div className="logo-container">
                      <img
                        src="./assets/logo.png"
                        alt="Brand Logo"
                        className="responsive-logo"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <section id="about" className="about-section">
              <Container>
                <Row>
                  <Col>
                    <h1>TEST1</h1>
                  </Col>
                  <Col>
                    <h1>TEST2</h1>
                  </Col>
                </Row>
              </Container>
            </section>

            <section id="experience" className="experience-section">
              <Container>
                <Row>
                  <Col>
                    <h1>TEST1 EX</h1>
                  </Col>
                  <Col>
                    <h1>TEST2 EX</h1>
                  </Col>
                </Row>
              </Container>
            </section>

            <section id="portfolio" className="portfolio-section">
              <Container>
                <Row>
                  <Col>
                    <h1>TEST1 Po</h1>
                  </Col>
                  <Col>
                    <h1>TEST2 Po</h1>
                  </Col>
                </Row>
              </Container>
            </section>

            <section id="contact" className="contact-section">
              <Container>
                <Row>
                  <Col>
                    <h1>TEST1 Po</h1>
                  </Col>
                  <Col>
                    <h1>TEST2 Po</h1>
                  </Col>
                </Row>
              </Container>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default App;
