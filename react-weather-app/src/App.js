import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Container>
      <Row>
        <Col lg={12}>
        <NavBar />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
        <Router>
      <Switch>
        <Route path = "/">
          <MainPage />
          </Route>
      </Switch>
    </Router>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
        <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
