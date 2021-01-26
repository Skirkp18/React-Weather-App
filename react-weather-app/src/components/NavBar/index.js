import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";



function NavBar() {
        return(
            <Container>
            <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand href="#">React Weather App</Navbar.Brand>
            </Navbar>
            </Container>
        );
    };


  export default NavBar;