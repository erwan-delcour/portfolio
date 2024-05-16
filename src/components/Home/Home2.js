import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
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
              <br />Les langages de programmation dont je suis familier sont{" "}
              <i>
                <b className="purple"> Javascript / Typescript, Python et Java.</b>
              </i>
              <br />
              <br />
              Bien que je sois familier avec plusieurs langages, la création de sites et d'applications &nbsp;
              <i>
                <b className="purple">avec les outils Node </b> reste ma préférence.
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
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
