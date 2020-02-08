import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./NumberInput.css";

const NumberInput = props => {
  //   if (props.value) {
  return (
    <Col className={`cell c${props.c + 1} r${props.r + 1}`} xs={1}>
      <div
        // type="number"
        name="cell"
        onClick={() => props.handleClick(props.r, props.c)}
      >
        {props.value}&nbsp;
      </div>
    </Col>
  );
  //   } else {
  //     return (
  //       <Col className={`cell c${props.x + 1}`} xs={1}>
  //         <input type="number" />
  //       </Col>
  //     );
  //   }
};

export default NumberInput;
