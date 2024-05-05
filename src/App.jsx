import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header.jsx";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div id="parent-container">
      <Header />

      <section id="hero-section">
        <Container fluid className="hero-container-kek">
          <Row
            className="d-flex align-items-center"
            style={{ height: "1080px" }}
          >
            <Col xs={12} md={6} className="intro-text">
              <div>
                <h1 className="tagline">Solving Complex Problems with&nbsp; 
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
                  style={{color: '#66a4e1'}} // Or #F72585
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

      <section id="experience-section">
        <div className="parallax"></div>
      </section>
    </div>
  );
}

export default App;
