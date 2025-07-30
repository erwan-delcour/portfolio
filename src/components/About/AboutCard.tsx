import * as React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard(): React.ReactElement {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je m'appelle <span className="purple">Erwan Delcour, </span>
            j'habite à <span className="purple">Senlis.</span>
            <br />
            Je travaille actuellement chez Sanef en alternance, en tant qu'analyste developpeur.
            <br />
            Je suis actuellement à la recherche d'un poste de développeur fullstack, suite à la fin de mon master.
            <br />
            <br />
            A part le développement, j'aime aussi faire des activités comme :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
            <li className="about-activity">
              <ImPointRight /> Sport collectif
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;