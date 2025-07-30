import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2(): React.ReactElement {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Voici <span className="purple"> une description de </span> moi-même
            </h1>
            <p className="home-about-body">
              Passionné par les technologies innovantes, je suis développeur et architecte spécialisé dans le développement de solutions logicielles.
              <br />
              <br />Les langages de programmation que je maitrise le plus sont{" "}
              <i>
                <b className="purple"> Javascript / Typescript, Flutter, Java et Python.</b>
              </i>
              <br />
              <br />
              Bien que je sois familier avec la création de sites et d'applications, j'apprécie particulièrement de participer&nbsp;
              <i>
                <b className="purple">à leur architecture et à leur déploiement</b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Trouver moi </h1>
            <p>
              N'hésitez pas <span className="purple"> à prendre contact </span>avec moi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/erwan-delcour"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/erwan-delcour/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://gitlab.com/erwan-delcour"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGitlab />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;