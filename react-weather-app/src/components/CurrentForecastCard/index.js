import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import API from "../../utils/API"

function CurrentForecastCard({city, state, zipCode}) {
    const currentCity = city;
    const currentState = state;
    const currentZipCode = zipCode;
    const searchParams = currentCity + "," + currentState;


    function getWeatherByZip() {
        API.getCurrentWeatherByZip(currentZipCode)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    function getWeatherByCityAndState() {
        API.getWeatherByCityAndState(searchParams)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }

    return(
        <Card id={"currentForecastCard"}>
            <Row>
                <Col lg={12}>
                    Current Forecast:
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <div>
                        <Button variant="secondary" size="lg" onClick={getWeatherByCityAndState}>
                        Large button
                        </Button>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default CurrentForecastCard;