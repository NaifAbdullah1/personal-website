import { Container, Row, Col } from "react-bootstrap";
import "../../scss/Sections/about.scss";
import LoremIpsum from "./LoremIpsum";

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container fluid className="about-container">
        <Row style={{ width: "100%" }}>
          <Col className="about-1st-column">
            <h1 className="sticky-about">About 📝</h1>
          </Col>
          <Col>
            <LoremIpsum />
          </Col>
          <Col>
            <h1>Orbit</h1>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
