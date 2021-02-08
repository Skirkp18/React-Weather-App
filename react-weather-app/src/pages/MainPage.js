import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ForecastContainer from "../components/ForecastContainer";
import Header from "../components/Header";
import API from "../utils/API";




function MainPage() {

  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]) 


    return (
        <Container>
            <Row>
                <Col lg={12}>
                 <Header setWeatherData={setWeatherData} />   
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                <ForecastContainer />
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;