/*
- On mobile width, make the nav links a drawer. Or have the website content get pushed down. Or give it a background color.

- You might need this, this can help in making a marquee: https://www.react-fast-marquee.com/


- When you're done, see if you can consolidate your css files

- Investigate ways to simplify the Header.jsx code. Make a backup copy and a commit first

- Determine a minimum width for the site. Do this once you've almost done with implementing the site

- Maybe make the nav links responsive to screen size instead of using css media queries? 
*/

import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./Components/Header.jsx";
import Loading from "./Components/LoadingScreen.jsx";
import AnimatedCursor from "react-animated-cursor";
import "./App.scss";
import About from "./Components/Sections/About.jsx";
import Hero from "./Components/Sections/Hero.jsx";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false); // Signals the completion of the intro
  const [fadeWebsiteContentIn, setFadeWebsiteContentIn] = useState(false); // Signals the beginning of fading in the content of the site

  // Runs after the initial logo intro disappears
  const handleLoadingComplete = () => {
    // This runs after the loading logo fades out
    setLoadingComplete(true);
    // Now, we'll fade in the website's contents 1 sec after the logo is gone
    setTimeout(() => {
      setFadeWebsiteContentIn(true);
    }, 1000);
  };

  // Disabling scrolling when website contents are fading in.
  useEffect(() => {
    // Adding a class to the DOM that disables scrolling upon page load
    document.body.classList.add("disable-scroll");
    // Re-enable scrolling after 7 seconds
    // Since this useEffect runs on page load, we need to account for the time it takes for the animation to go away. We need to coordinate the timing of this. Hence why we chose 7 seconds (7000 ms)
    const enableScrollTimeout = setTimeout(() => {
      document.body.classList.remove("disable-scroll");
    }, 7000);

    return () => {
      clearTimeout(enableScrollTimeout);
      document.body.classList.remove("disable-scroll"); // Cleanup on component unmount
    };
  }, []); // Empty dependency array to run only on component mount (In this case, it's the page load)

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
          zIndex: 99999, //Ensuring both components of cursor are on top of everything
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
        <div className={fadeWebsiteContentIn ? "fade-in" : "fade-out"}>
          <Header />

          <Hero/>

          <About/>

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
      )}
    </>
  );
}

export default App;
