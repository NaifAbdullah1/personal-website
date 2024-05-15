import { Container, Row, Col } from "react-bootstrap";

import "../../scss/Sections/common.scss";
import "../../scss/Sections/about.scss";

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container fluid className="container-layout">
        <Row style={{ width: "100%" }}>
          <Col style={{ flex: "0 0 20%" }}>
            <h1 className="sticky-1st-column">About 📝</h1>
          </Col>
          <Col style={{ flex: "0 0 40%", textAlign: "left" }}>
            <div>
              <h4>Hello 👋🏻</h4>
              <br></br>
              <h4>My name is Naif Abdullah.</h4>
              <br></br>
              <p>
                As a Computer Science graduate, I&apos;ve excelled both academically
                and as a Full Stack Web Developer. I&apos;ve contributed to critical
                systems at my university&apos;s IT department and enhanced
                applications at J. M. Smucker Co. I&apos;m dedicated to self-learning
                and collaborative problem-solving in digital
                environments.
              </p>
            </div>
          </Col>
          <Col style={{ flex: "0 0 40%" }}>
            <img src="./assets/naif.png" className="naif-image"/>
          </Col>
        </Row>
        <h1>Below row</h1>
      </Container>
    </section>
  );
};

export default About;
