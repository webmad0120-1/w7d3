import React, { Component } from "react";
import "./App.css";
import StockMarketPainter from "./StockMarketPainter";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      appleValue: 100
    };

    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    setInterval(() => {
      this.setState({
        ...this.state,
        appleValue: randomInt(50, 200)
      });
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <StockMarketPainter
          stockMarketValue={this.state.appleValue}
          name="Apple"
        ></StockMarketPainter>
      </div>
    );
  }
}
