import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import API from "../../utils/API"

function CurrentForecastCard() {




    return(
        <Card id={"currentForecastCard"}>
            <Row>
                <Col lg={12}>
                    <h2>Current Forecast:</h2>
                    <h3>{}</h3>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                </Col>
            </Row>
        </Card>
    );
};

export default CurrentForecastCard;