import React from "react";
import "./Ticker.css";

export default class Ticker extends React.Component {
    state = {
        company: "",
        price: 0
    }

  static getDerivedStateFromProps(newState, oldState) {
      console.log(newState)
      console.log(oldState)

    let colorProp;
    
    if (newState.price > oldState.price) {
        colorProp = "green"    
    }   else {
        colorProp = "red"
    }

    return {
        company: newState.company,
        price: newState.price,
        color: colorProp
    }
  }

  render() {
    return (
      <div className="ticker" style={{backgroundColor: this.state.color}}>
        <h1>{this.state.company}</h1>
        <h3>{this.state.price} $</h3>
      </div>
    );
  }
}
