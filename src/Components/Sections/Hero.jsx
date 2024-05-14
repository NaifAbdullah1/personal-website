import { Col } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";
import '../../scss/Sections/hero.scss'

const Hero = () => {
  return (
    <section id="hero">
        <div className=" container-fluid hero-row">
          
          <Col className="intro-text-col">
            
              <h1 className="tagline">
                Solving Complex Problems with&nbsp;
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
                  style={{
                    color: "#66a4e1",
                    fontFamily: "'Kaushan Script', cursive",
                  }}
                  repeat={Infinity}
                />
              </h1>
            
          </Col>

          <Col className="brand-col">
              <img
                src="./assets/trimmed-logo.png"
                alt="Brand Logo"
                className="responsive-logo"
              />
          </Col>
        </div>
    </section>
  );
};

export default Hero;