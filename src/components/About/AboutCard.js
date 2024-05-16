import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour, je m'appelle <span className="purple">Erwan Delcour, </span>
            j'habite à <span className="purple">Senlis, 60300 France.</span>
            <br />
            Je travaille actuellement chez Sanef en alternance, en tant que développeur.
            <br />
            En parallèle, je suis entrain de passer mon master Architecture des Logiciels à l'ESGI Paris.
            <br />
            <br />
            A part le développement, j'aime aussi faire des activités comme :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
            <li className="about-activity">
              <ImPointRight /> Jouer aux jeux vidéos
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
