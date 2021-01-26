import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ForecastContainer from "../components/ForecastContainer";
import Header from "../components/Header";
import API from "../utils/API";




function MainPage() {
    const [city, setCity] = useState("Tarrytown");
    const [state, setState] = useState("New York");
    const [zipCode, setZipCode] = useState("10591");
    const [searchState, setSearchState] = useState("")

    useEffect(() => {

        getWeather(searchState);
    });

    function getWeather() {
        const cityAndState = city + "," + state;
    
        if (searchState === "cityAndState") {
            API.getWeatherByCityAndState(cityAndState)
            .then((res) => console.log(res));
        } else if (searchState === "zipCode") {
            API.getCurrentWeatherByZip(zipCode)
            .then((res) => console.log(res))
        }
    }

    return (
        <Container>
            <Row>
                <Col lg={12}>
                 <Header city={city} setCity={setCity} state={state} setState={setState} zipCode={zipCode} setZipCode={setZipCode} setSearchState={setSearchState} />   
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                <ForecastContainer city={city} state={state} zipCode={zipCode} />
                </Col>
            </Row>
        </Container>
    );
};

export default MainPage;