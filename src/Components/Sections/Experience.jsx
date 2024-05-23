import { Container, Row, Col } from "react-bootstrap"

import "../../scss/Sections/common.scss";
import '../../scss/Sections/experience.scss'
import LoremIpsum from "./LoremIpsum";

const Experience = () =>{
    return (
        <section id="experience" className="experience-section">
            <Container fluid className="container-layout">
              <Row style={{ width: "100%" }}>
                <Col style={{ flex: "0 0 20%" }}>
                  <h1 className="sticky-1st-column">Experience 🏢</h1>
                </Col>
                <Col>
                  <LoremIpsum/>
                </Col>
                <Col>
                  <h1>Coming Soon! TEST</h1>
                </Col>
              </Row>
            </Container>
          </section>
    )
}

export default Experience;