import { Container, Row, Col } from "react-bootstrap";

import "../../scss/Sections/common.scss";
import "../../scss/Sections/about.scss";

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container fluid className="container-layout">
        <Row style={{ width: "100%" }}>
          <Col xs={12} sm={12} md={12} lg={3} style={{ textAlign: "center" }}>
            <h1 className="sticky-1st-column">About 📝</h1>
          </Col>
          <Col xs={12} sm={12} md={12} lg={9} style={{ textAlign: "left", display: "flex" }}>
            <div>
              <h4>Hello 👋🏻</h4>
              <br></br>
              <h4>My name is Naif Abdullah.</h4>
              <br></br>
              <p>
                As a Computer Science graduate, I&apos;ve excelled both academically
                and as a Full Stack Web Developer. I&apos;ve contributed to critical
                systems at my university&apos;s IT department and enhanced
                applications at the J. M. Smucker Co. I&apos;m dedicated to self-learning
                and collaborative problem-solving in digital
                environments.
              </p>
            </div>
            <img src="./assets/naif.png" className="naif-image"/>
          </Col>
        </Row>
        <h1>Below row</h1>
      </Container>
    </section>
  );
};

export default About;
