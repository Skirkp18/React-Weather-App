import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import "./style.css"



function Footer() {

    return (
        <Container fluid id={"footer"}>
            <Row>
                <Col lg={12}>
                    <p id={"footerTxt"}>© Sean Kirkpatrick 2021</p>
                </Col>
            </Row>
        </Container>

    )
};

export default Footer;