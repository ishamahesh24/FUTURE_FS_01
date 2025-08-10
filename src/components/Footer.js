import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg"; // LinkedIn
import navIcon3 from "../assets/img/nav-icon3.svg"; // Instagram
import githubIcon from "../assets/img/github.png"; // GitHub icon

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/isha-m-bhandary-a5976b282/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/ishamahesh24"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
