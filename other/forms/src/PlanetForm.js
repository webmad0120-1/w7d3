import React from "react";
import "./planetForm.css";

export default class PlanetForm extends React.Component {
  constructor() {
    super();

    console.log("constructor", document.querySelector("#test"));

    this.state = {
      name: "",
      lightYears: 0,
      planetMass: 0,
      stellarMagnitude: 0,
      discoveryDate: 0
    };
  }

  // onChange={e => this.updateFormData(e, "name")}
  updateFormData(e, field, fieldType) {
    let newState = {
      ...this.state
    };

    newState[field] = fieldType === "number" ? +e.target.value : e.target.value;

    this.setState(newState);
  }

  sendState(e) {
    e.preventDefault();
    this.props.sendStateFromApp(this.state);
  }

  componentDidMount() {
    console.log("componentDidMount");

    // DOM manipulation once the DOM is ready
    document.querySelector("#test input").style.backgroundColor = "#f3f8fc";
  }

  componentWillUnmount() {
    alert("planet form componentWillUnmount called!");
    // clearIntervals, removeEventListeners.... (memory optimisation)
  }

  render() {
    return (
      <form className="planet-form" id="test">
        {this.state.name && (
          <h1>
            {this.state.name} ({this.state.lightYears})
          </h1>
        )}

        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={e => this.updateFormData(e, "name", "string")}
        ></input>
        <input
          type="number"
          placeholder="light years"
          name="light-years"
          value={this.state.lightYears}
          onChange={e => this.updateFormData(e, "lightYears", "number")}
        ></input>
        <input
          type="number"
          name="planet-mass"
          placeholder="planet-mass"
          value={this.state.planetMass}
          onChange={e => this.updateFormData(e, "planetMass", "number")}
        ></input>
        <input
          type="number"
          name="stellar-magnitude"
          placeholder="stellar-magnitude"
          value={this.state.stellarMagnitude}
          onChange={e => this.updateFormData(e, "stellarMagnitude", "number")}
        ></input>
        <input
          type="number"
          name="discovery-date"
          placeholder="discovery-date"
          value={this.state.discoveryDate}
          onChange={e => this.updateFormData(e, "discoveryDate", "number")}
        ></input>

        <button onClick={e => this.sendState(e)}>Add new planet</button>

        {/* {JSON.stringify(this.state)} */}
      </form>
    );
  }
}
