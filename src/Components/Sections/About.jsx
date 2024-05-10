import { Container, Row, Col } from "react-bootstrap"
import '../../scss/Sections/about.scss'

const About = () => {
    return (
        <section id="about" className="about-section">
            <Container fluid className="about-container">
              <Row>
                <Col>
                  <h1 style={{color: "white"}}>About Sticky Column</h1>
                </Col>
                <Col>
                  <h1 style={{color: "white"}}>Content</h1>
                </Col>
                <Col>
                  <h1 style={{color: "white"}}>Orbit</h1>
                </Col>
              </Row>
            </Container>
          </section>
    )
}

export default About;