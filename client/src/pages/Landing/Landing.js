import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <Container className="Landing">
        <Row className="r1 justify-content-md-center">
          <Col className="c1" xs={1}>
            Box
          </Col>
          <Col className="c2" xs={1}>
            Box
          </Col>
          <Col className="c3" xs={1}>
            Box
          </Col>
          <Col className="c4" xs={1}>
            Box
          </Col>
          <Col className="c5" xs={1}>
            Box
          </Col>
          <Col className="c6" xs={1}>
            Box
          </Col>
          <Col className="c7" xs={1}>
            Box
          </Col>
          <Col className="c8" xs={1}>
            Box
          </Col>
          <Col className="c9" xs={1}>
            Box
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
