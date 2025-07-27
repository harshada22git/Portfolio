import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import watch from "../../Assets/Projects/watch.png";
import portfolio from "../../Assets/Projects/portfolio.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watch}
              isBlog={false}
              title="Digital watch"
              description="watch display Shows hours, minutes, and often seconds in a 12-hour or 24-hour format."
              ghLink="https://github.com/harshada22git/Digital-WAtch"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="portfolio"
              description="Portfolio website serves as a digital resume, allowing potential employers and clients to explore my work and understand my capabilities."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
        
            />
          </Col>

          

      

     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
