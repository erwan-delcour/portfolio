import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import site from "../../Assets/Projects/site.png";
import trymycode from "../../Assets/Projects/trymycode.png";
import bellalingua from "../../Assets/Projects/bellalingua.png";

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
          <Col sm={12} lg={6} xl={4} className="project-card">
            <ProjectCard
              imgPath={bellalingua}
              isBlog={false}
              title="BellaLingua"
              description="BellaLingua est une application d'apprentissage des langues à écriture non latine, développée dans le cadre de mon projet de fin de master. Elle comprend un site web fait en Next, une api faite en Express/TypeScript et une application mobile Flutter publiée sur l'App Store. Le site est déployé et accessible en ligne."
              demoLink="https://bellalingua.erwandelcour.fr"
              appStoreLink="https://apps.apple.com/fr/app/bellalingua/id6747658518"
            />
          </Col>
          <Col sm={12} lg={6} xl={4} className="project-card">
            <ProjectCard
              imgPath={site}
              isBlog={false}
              title="Site portfolio pour un professionnel"
              description="Ce site présente les services, les compétences ainsi que les différentes méthodes que le professionnel propose. Il a été réalisé avec html, css et javascript."
              demoLink="https://www.sophrologie-ceciledelcour.com/"
            />
          </Col>
          <Col sm={12} lg={6} xl={4} className="project-card">
            <ProjectCard
              imgPath={trymycode}
              isBlog={false}
              title="TryMyCode"
              description="Application web pour tester des scripts en ligne comme une pipeline avec visualisation étape par étape et inclut une partie réseau social pour partager et discuter. Front en React, back en TypeScript, exécution sous Kubernetes, déploiement sur GCP et application mobile en Kotlin."
              gtLink="https://gitlab.com/pa2024"
            />
          </Col>
          <Col sm={12} lg={6} xl={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="Portfolio personnel, présentant qui je suis, mes compétences et mes projets. Il a été réalisé avec React Typescript."
              ghLink="https://github.com/erwan-delcour/portfolio"
              demoLink="https://www.portfolio.erwandelcour.fr/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;