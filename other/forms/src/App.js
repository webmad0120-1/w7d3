import React, { Component } from "react";
import PlanetForm from "./PlanetForm";
import "./App.css";

// NASA experiment as per https://exoplanets.nasa.gov/exoplanet-catalog/
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      appleValue: 100,
      showForm: true,
      planets: [
        {
          name: "HD 114762 b",
          lightYears: 131,
          planetMass: 10.69,
          stellarMagnitude: 7301,
          discoveryDate: 1989
        },
        {
          name: "PSR B1257+12 c",
          lightYears: 1957,
          planetMass: 4.3,
          stellarMagnitude: null,
          discoveryDate: 1992
        }
      ]
    };
  }

  updateState(newPlanet) {
    let newState = {
      ...this.state
    };

    newState.planets.unshift(newPlanet);

    this.setState(newState);
  }

  destroyForm() {
    this.setState({
      ...this.state,
      showForm: false
    });
  }

  render() {
    return (
      <div className="App">
        <button className="removal" onClick={() => this.destroyForm()}>Destroy form</button>

        <div className="contents">
          {this.state.showForm && (
            <PlanetForm
              sendStateFromApp={state => this.updateState(state)}
            ></PlanetForm>
          )}
          <table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Light Years</td>
                <td>Planet Mass</td>
                <td>Stellar Magnitude</td>
                <td>Discovery Date</td>
              </tr>
            </thead>
            <tbody>
              {this.state.planets.map((planet, idx) => {
                return (
                  <tr key={idx}>
                    <td>{planet.name}</td>
                    <td>{planet.lightYears}</td>
                    <td>{planet.planetMass}</td>
                    <td>{planet.stellarMagnitude}</td>
                    <td>{planet.discoveryDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
