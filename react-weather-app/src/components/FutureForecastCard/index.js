import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";


function FutureForecastCard() {

    return(
        <Card>
            <Row>
                <Col lg={12}>
                    <p>5 Day Forecast:</p>
                </Col>
            </Row>
        </Card>
    );
};

export default FutureForecastCard;