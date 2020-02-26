import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();
    console.log("constructor");
    this.state = {
      actors: []
    };
  }

  render() {
    console.log("render");

    return (
      <section>
        {this.state.actors.length === 0 && <h1>Preloading</h1>}
        {this.state.actors.length > 0 && (
          <ul>
            {this.state.actors.map((actor, idx) => (
              <li key={idx}>{actor.name}</li>
            ))}
          </ul>
        )}
      </section>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");

    axios
      .get(
        "https://raw.githubusercontent.com/ironhack-labs/lab-react-ironcontacts/master/starter-code/src/contacts.json"
      )
      .then(actors => {
        this.setState({
          ...this.state,
          actors: actors.data
        });
      });
  }
}
