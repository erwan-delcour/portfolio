import * as React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiMacos,
    SiJetbrains,
    SiMicrosoftteams,
} from "react-icons/si";
import {
    FaAws
} from "react-icons/fa";
import { 
    DiGoogleCloudPlatform
} from "react-icons/di";


function Toolstack(): React.ReactElement {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <FaAws />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGoogleCloudPlatform />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMacos />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMicrosoftteams />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJetbrains />
            </Col>
        </Row>
    );
}

export default Toolstack;