import * as React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaGitlab, FaAppStoreIos } from "react-icons/fa6";

interface ProjectCardProps {
  imgPath: string;
  title: string;
  description: string;
  isBlog?: boolean;
  ghLink?: string;
  gtLink?: string;
  demoLink?: string;
  appStoreLink?: string;
}

function ProjectCards(props: ProjectCardProps): React.ReactElement {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column">
        <div className="flex-grow-1">
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        </div>
        <div className="mt-auto">
          <div className="d-flex flex-wrap gap-2 justify-content-center">
            {props.ghLink && (
              <Button variant="primary" href={props.ghLink} target="_blank">
                <BsGithub /> &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>
            )}
            {props.gtLink && (
              <Button 
                variant="primary" 
                href={props.gtLink} 
                target="_blank"
              >
                <FaGitlab /> &nbsp;
                {"GitLab"}
              </Button>
            )}
            {props.demoLink && (
              <Button
                variant="primary"
                href={props.demoLink}
                target="_blank"
              >
                <CgWebsite /> &nbsp;
                {"Demo"}
              </Button>
            )}
            {props.appStoreLink && (
              <Button
                variant="primary"
                href={props.appStoreLink}
                target="_blank"
              >
                <FaAppStoreIos /> &nbsp;App Store
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;