import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Landing.css";
import Number from "../../components/NumberInput/NumberInput";

class Landing extends Component {
  state = {
    number: "0123456789",
    clickedCell: "",
    grid: [
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", ""]
    ]
  };

  componentDidMount() {
    document.addEventListener("keydown", this.onKeyDown);
  }

  componentDidUpdate() {
    console.log(this.state.clickedCell);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }
  onKeyDown = e => {
    // console.log(this.state.number.includes(e.key));
    if (this.state.number.includes(e.key)) {
      let grid = this.state.grid;
      let cell = this.state.clickedCell;
      grid[cell[0]][cell[1]] = e.key;
      this.setState({ grid: grid });
    }
  };

  handleClick(r, c) {
    this.setState({ clickedCell: `${r}${c}` });
    console.log(r);
    console.log(c);
  }

  render() {
    return (
      <Container className="Landing">
        {this.state.grid.map((row, r) => {
          // console.log(row);
          return (
            <Row className={`r${r + 1} justify-content-md-center`}>
              {row.map((col, c) => {
                // console.log(col);
                return (
                  <Number
                    c={c}
                    r={r}
                    value={col}
                    handleClick={() => this.handleClick(r, c)}
                  />
                );
              })}
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default Landing;
