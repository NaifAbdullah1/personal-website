/*
We'll follow the style of this site: https://codesandbox.io/p/sandbox/github/pmndrs/react-spring/tree/main/demo/src/sandboxes/parallax-sticky?file=%2Fsrc%2FApp.tsx%3A9%2C5-35%2C11

Here's the official library: https://www.npmjs.com/package/@react-spring/parallax

And here's a potentially helpful one from react-spring: https://codesandbox.io/p/sandbox/github/pmndrs/react-spring/tree/main/demo/src/sandboxes/parallax-vert?file=%2Fsrc%2FApp.tsx


- On mobile width, make the nav links a drawer. Or have the website content get pushed down. Or give it a background color.

- You might need this, this can help in making a marquee: https://www.react-fast-marquee.com/

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
        }}
        outerStyle={{
          border: "3px solid white",
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
            <section id="hero-section">
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
                          style={{ color: "#66a4e1" }} // Or #F72585
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

            <section className="about-section">
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

            <section className="experience-section">
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

            <section className="portfolio-section">
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

            <section className="contact-section">
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
