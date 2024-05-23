import { Container, Row, Col } from "react-bootstrap";
import LoremIpsum from "./LoremIpsum";

import "../../scss/Sections/common.scss";
import "../../scss/Sections/portfolio.scss";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <Container fluid className="container-layout">
        <Row style={{ width: "100%" }}>
          <Col style={{ flex: "0 0 20%" }}>
            <h1 className="sticky-1st-column">Portfolio 🎯</h1>
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
  );
};

export default Portfolio;
