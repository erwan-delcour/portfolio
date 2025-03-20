import * as React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa6";

interface ProjectCardProps {
  imgPath: string;
  title: string;
  description: string;
  isBlog?: boolean;
  ghLink?: string;
  gtLink?: string;
  demoLink?: string;
}

function ProjectCards(props: ProjectCardProps): React.ReactElement {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
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
            style={{ marginLeft: props.ghLink ? "10px" : "0px" }}
          >
            <FaGitlab /> &nbsp;
            {"GitLab"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: (props.ghLink || props.gtLink) ? "10px" : "0px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;