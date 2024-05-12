import { Container, Row, Col } from "react-bootstrap";
import "../../scss/Sections/about.scss";
import ImageSlideShow from "../ImageSlideShow";

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container fluid className="about-container">
        <Row style={{ width: "100%", maxWidth: "1140px" }}>
          <Col style={{ flex: "0 0 20%" }}>
            <h1 className="sticky-about">About 📝</h1>
          </Col>
          <Col style={{ flex: "0 0 40%" }}>
            <div className="align-text-left">
              <h4>Hello 👋🏻</h4>
              <br></br>
              <h4>My name is Naif Abdullah.</h4>
              <br></br>
              <p>
                Naif Abdullah, a recent graduate from the University of
                Wisconsin – Madison, consistently excelling academically with a
                strong focus on Computer Science. Having honed skills as a Full
                Stack Web Developer, I contributed to critical projects at J. M.
                Smucker Co., enhancing performance and reliability. Beyond
                professional roles, I&apos;m a dedicated self-learner, mastering
                C# and showcasing projects on GitHub. Dedicated to collaborative
                problem-solving and continuous improvement in digital
                environments, I strive to bring innovative solutions to every
                challenge.
              </p>
            </div>
          </Col>
          <Col style={{ flex: "0 0 40%" }}>
            <ImageSlideShow />
          </Col>
        </Row>
        <h1>Below row</h1>
      </Container>
    </section>
  );
};

export default About;
