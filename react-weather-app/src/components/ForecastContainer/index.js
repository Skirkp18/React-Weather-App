import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CurrentForecastCard from "../CurrentForecastCard";
import FutureForecastCard from "../FutureForecastCard";
import "./style.css"

function ForecastContainer(props) {
    const city = props.city;
    const state = props.state;
    const zipCode = props.zipCode;
    const weatherData = props.weatherData;
    
    return(
        <Card id={"forecastBox"}>
            <Row>
                <Col lg={4}>
                    <CurrentForecastCard city={city} state={state} zipCode={zipCode} weatherData={weatherData}/>
                </Col>
                <Col lg={8}>
                    <FutureForecastCard weatherData={weatherData} />
                </Col>
            </Row>
        </Card>
    );
};

export default ForecastContainer;