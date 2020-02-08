import React, { Component } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import "./Landing.css";
import Number from "../../components/NumberInput/NumberInput";

class Landing extends Component {
  // Minimum of 17 numbers in randomizer
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

  componentDidUpdate() {}

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = e => {
    if (this.state.number.includes(e.key)) {
      let grid = this.state.grid;
      let cell = this.state.clickedCell;
      grid[cell[0]][cell[1]] = e.key;
      this.setState({ grid: grid });
    }
  };

  handleClick(r, c) {
    if (this.state.clickedCell) {
      this.clearClickedCellStyling(
        parseInt(this.state.clickedCell[0]),
        parseInt(this.state.clickedCell[1])
      );
    }
    this.setState({ clickedCell: `${r}${c}` });

    this.highlightCells(r, c);
  }

  highlightCells(r, c) {
    // Row Clicked
    let rowArray = document.getElementsByClassName(`r${r + 1}`);
    for (let i = 0; i < rowArray.length; i++) {
      rowArray[i].style.backgroundColor = "grey";
    }

    // Col Clicked
    let colArray = document.getElementsByClassName(`c${c + 1}`);
    for (let i = 0; i < colArray.length; i++) {
      colArray[i].style.backgroundColor = "grey";
    }

    if (r < 3 && c < 3) {
      this.loopThroughHighlightCells(3, 3, true);
    } else if (r < 3 && c < 6) {
      this.loopThroughHighlightCells(3, 6, true);
    } else if (r < 3 && c < 9) {
      this.loopThroughHighlightCells(3, 9, true);
    } else if (r < 6 && c < 3) {
      this.loopThroughHighlightCells(6, 3, true);
    } else if (r < 6 && c < 6) {
      this.loopThroughHighlightCells(6, 6, true);
    } else if (r < 6 && c < 9) {
      this.loopThroughHighlightCells(6, 9, true);
    } else if (r < 9 && c < 3) {
      this.loopThroughHighlightCells(9, 3, true);
    } else if (r < 9 && c < 6) {
      this.loopThroughHighlightCells(9, 6, true);
    } else if (r < 9 && c < 9) {
      this.loopThroughHighlightCells(9, 9, true);
    }

    // Cell Clicked
    document.getElementsByClassName(
      `r${r + 1}c${c + 1}`
    )[0].style.backgroundColor = "lightblue";
  }

  loopThroughHighlightCells(r, c, bool) {
    if (bool) {
      for (let row = r - 3; row < r; row++) {
        for (let col = c - 3; col < c; col++) {
          document.getElementsByClassName(
            `r${row + 1}c${col + 1}`
          )[0].style.backgroundColor = "grey";
        }
      }
    } else if (!bool) {
      for (let row = r - 3; row < r; row++) {
        for (let col = c - 3; col < c; col++) {
          document.getElementsByClassName(
            `r${row + 1}c${col + 1}`
          )[0].style.backgroundColor = "";
        }
      }
    }
  }

  clearClickedCellStyling(r, c) {
    document.getElementsByClassName(
      `r${r + 1}c${c + 1}`
    )[0].style.backgroundColor = "";

    let rowArray = document.getElementsByClassName(`r${r + 1}`);
    for (let i = 0; i < rowArray.length; i++) {
      rowArray[i].style.backgroundColor = "";
    }

    let colArray = document.getElementsByClassName(`c${c + 1}`);
    for (let i = 0; i < colArray.length; i++) {
      colArray[i].style.backgroundColor = "";
    }

    if (r < 3 && c < 3) {
      this.loopThroughHighlightCells(3, 3, false);
    } else if (r < 3 && c < 6) {
      this.loopThroughHighlightCells(3, 6, false);
    } else if (r < 3 && c < 9) {
      this.loopThroughHighlightCells(3, 9, false);
    } else if (r < 6 && c < 3) {
      this.loopThroughHighlightCells(6, 3, false);
    } else if (r < 6 && c < 6) {
      this.loopThroughHighlightCells(6, 6, false);
    } else if (r < 6 && c < 9) {
      this.loopThroughHighlightCells(6, 9, false);
    } else if (r < 9 && c < 3) {
      this.loopThroughHighlightCells(9, 3, false);
    } else if (r < 9 && c < 6) {
      this.loopThroughHighlightCells(9, 6, false);
    } else if (r < 9 && c < 9) {
      this.loopThroughHighlightCells(9, 9, false);
    }
  }

  render() {
    return (
      <div className="Landing">
        {this.state.grid.map((row, r) => {
          return (
            <div className={`row`}>
              {row.map((col, c) => {
                return (
                  <Number
                    c={c}
                    r={r}
                    value={col}
                    handleClick={() => this.handleClick(r, c)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Landing;
