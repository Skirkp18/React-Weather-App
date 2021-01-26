import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {Dropdown, DropdownButton} from "react-bootstrap";
import "./style.css"

function Header({ setZipCode, setCity, setState, setSearchState, city, state, zipCode }) {

  const States = ["Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "MontanaNebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "PennsylvaniaRhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
    ]


  function SearchByCityAndState(event) {
    event.preventDefault();
    console.log("Click!")
    setSearchState("cityAndState")
  };

  function SearchByZipCode(event) {
    event.preventDefault()
    console.log("Click!");
    setSearchState("zipCode")
  }

  function SetCityValue(event) {
    console.log(event.target.value);
    setCity(event.target.value);
  };

  function SetStateValue(event) {
    console.log(event.target.outerText);
    setState(event.target.value);
  };

  function SetZipCodeValue(event) {
    console.log(event.target.value);
    setZipCode(event.target.value)
  };

  return (
    <Card id={"seachContainer"}>
      <Row>
        <Col lg={6}>
          <h1>Search For Your Local Weather:</h1>
        </Col>
      </Row>
      <Row>
        <Col lg={5}>
          <Card id="zipCodeSearchCard">
            <Row>
              <Col lg={12}>
                <p>Enter ZipCode:</p>
              </Col>
              <Col lg={12}>
                <Form onSubmit={SearchByZipCode} id="zipCodeSearch">
                  <Form.Row>
                    <Col lg={8}>
                      <Form.Control placeholder="Zip" id="zipCodeInputForm" onChange={SetZipCodeValue} />
                    </Col>
                    <Col>
                      <Button variant="secondary" type="submit" value="sumbit">Search</Button>
                    </Col>
                  </Form.Row>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col lg={2}>
          <p>Or:</p>
        </Col>
        <Col lg={5}>
          <Card id="cityAndStateSearchCard">
            <Row>
              <Col lg={12}>
                <p>Enter City and State</p>
              </Col>
              <Col lg={12}>
                <Form onSubmit={SearchByCityAndState} id="cityAndStateSearch">
                  <Form.Row>
                    <Col lg={5}>
                      <Form.Control placeholder="City" onChange={SetCityValue} />
                    </Col>
                    <Col>
                      <DropdownButton id="dropdown-basic-button" title="State">
                        {States.map((state) => {
                          return(
                        <Dropdown.Item value={state} onClick={SetStateValue} key={state}>{state}</Dropdown.Item>
                          );
                        })}
                      </DropdownButton>
                    </Col>
                    <Col>
                      <Button variant="secondary" type="submit" value="submit">Search</Button>
                    </Col>
                  </Form.Row>
                </Form>

              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default Header;