import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Header.jsx";

function App() {
  return (
    <div id="parent-container">
      <Header />
      <section id="hero-section" className="hero-container">
        <Container fluid>
          <Row className="d-flex align-items-center" style={{ height: '1080px' }}>
            <Col 
              xs={12} 
              md={6} 
              className="intro-text"
            >
              <div>INTRO TODO</div>
            </Col>

            <Col 
              xs={12} 
              md={6} 
              className="logo-col"
            >
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
// <img src='./assets/logo.png' alt='Brand Logo'/>
