import React, { Component } from "react";
import Arrow from "./arrow.svg";
import "./stockmarket.css";

export default class StockMarketPainter extends Component {
  //the component's constructor gets executed first, second getDerivedStateFromProps and third render()
  //from that moment on, getDerivedStateFromProps will be called everytime the props change
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      stockMarketValue: props.stockMarketValue,
      color: undefined
    };
  }

  // this static method will be triggered every time the props send by the parent (App in this case)
  // change.
  static getDerivedStateFromProps(nextProps, prevState) {
    // this indicates the new props sent by App
    console.log(nextProps);
    // this indicates the previous state of this component
    console.log(prevState);

    // this returns the new state, here you have an opportunity to compute
    // differences between the new props and the previous state,
    // hence you can do for exmaple a color change depending on the previous and new value
    return {
      name: nextProps.name,
      stockMarketValue: nextProps.stockMarketValue,
      color:
        prevState.stockMarketValue > nextProps.stockMarketValue
          ? "red"
          : "green"
    };
  }

  render() {
    return (
      // in order to specify style, you can use the classical 'style' of DOM
      // you have to pass and object containing the properties in camelCase + the property value
      <div
        style={{ fontSize: 20, color: this.state.color }}
        className="stockmarket"
      >
        <svg
          width="30px"
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 0 560 560"
          className={`${this.state.color}`}
        >
          <g transform="translate(0, -0.561)">
            <path d="M0 559.991 C0 558.504 279.994 0 280.458 0.561456 C282.014 2.44528 560.512 560.13 559.999 560.337 C559.665 560.472 496.562 533.384 419.77 500.142 C419.77 500.142 280.15 439.701 280.15 439.701 C280.15 439.701 140.756 500.131 140.756 500.131 C64.0894 533.368 1.05572 560.561 0.681114 560.561 C0.306506 560.561 8e-06 560.304 8e-06 559.991 C8e-06 559.991 0 559.991 0 559.991 Z" />
          </g>
        </svg>
        {this.state.name} value is {this.state.stockMarketValue} $
      </div>
    );
  }
}
