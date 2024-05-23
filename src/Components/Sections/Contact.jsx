import { Container, Row, Col } from "react-bootstrap"
import LoremIpsum from "./LoremIpsum"

import "../../scss/Sections/common.scss";
import '../../scss/Sections/contact.scss'

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <Container fluid className="container-layout">
              <Row style={{ width: "100%" }}>
                <Col style={{ flex: "0 0 20%" }}>
                  <h1 className="sticky-1st-column">Contact ✉️</h1>
                </Col>
                <Col>
                <LoremIpsum/>
                </Col>
                <Col>
                  <h1>Coming Soon!</h1>
                </Col>
              </Row>
            </Container>
          </section>
    )
}

export default Contact