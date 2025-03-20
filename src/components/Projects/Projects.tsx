import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import site from "../../Assets/Projects/site.png";

function Projects(): React.ReactElement {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes récents <strong className="purple">travaux</strong>
        </h1>
        <p style={{ color: "white" }}>
          Vous pouvez retrouver ici mes projets publiques.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Portfolio personnel, présentant qui je suis, mes compétences et mes projets. Il a été réalisé avec ReactJS."
              ghLink="https://github.com/erwan-delcour/portfolio"
              demoLink="https://erwan-delcour.github.io/portfolio/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={site}
              isBlog={false}
              title="Site pour un professionnel"
              description="Ce site présente les services, les compétences ainsi que les différentes méthodes que le professionnel propose. Il a été réalisé avec html, css et javascript (Pas de depot github)."
              demoLink="https://www.sophrologie-ceciledelcour.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;