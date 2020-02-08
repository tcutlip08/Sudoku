import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "./NumberInput.css";

const NumberInput = props => {
  if (props.value) {
    return (
      <span
        className={`cell r${props.r + 1} c${props.c + 1} r${props.r +
          1}c${props.c + 1}`}
        onClick={() => props.handleClick(props.r, props.c)}
      >
        {props.value}
      </span>
    );
  } else {
    return (
      <span
        className={`cell r${props.r + 1} c${props.c + 1} r${props.r +
          1}c${props.c + 1}`}
        onClick={() => props.handleClick(props.r, props.c)}
      >
        &nbsp;
      </span>
    );
  }
};

export default NumberInput;
