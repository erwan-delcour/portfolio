import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import site from "../../Assets/Projects/site.png";
import trymycode from "../../Assets/Projects/trymycode.png";

function Projects(): React.ReactElement {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">travaux</strong> récents
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
              description="Portfolio personnel, présentant qui je suis, mes compétences et mes projets. Il a été réalisé avec React Typescript."
              ghLink="https://github.com/erwan-delcour/portfolio"
              demoLink="https://www.portfolio.erwandelcour.fr/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={site}
              isBlog={false}
              title="Site pour un professionnel"
              description="Ce site présente les services, les compétences ainsi que les différentes méthodes que le professionnel propose. Il a été réalisé avec html, css et javascript."
              demoLink="https://www.sophrologie-ceciledelcour.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trymycode}
              isBlog={false}
              title="Projet de fin d'année"
              description="Ce site a été réalisé dans le cadre de mon projet annuel de 4ème année. Sa fonctionnalité principale était de pouvoir tester des successions de scripts en ligne, à la manière d'une pipeline, et d'en voir le résultat étape par étape. Une partie réseau social pour partager ses scripts et en discuter était aussi disponible. Il a été réalisé avec React pour le front, Typescript pour le back. Pour la partie exécution de code, Kubernetes a été utilisé. Le déploiement en production a été fait avec GCP. Une partie mobile a également été réalisée en Kotlin."
              gtLink="https://gitlab.com/pa2024"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;