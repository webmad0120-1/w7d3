import React, { Component } from "react";
import Actor from "./Actor";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      actors: [
        {
          id: 1,
          name: "Sean Conery"
        },
        {
          id: 2,
          name: "Bill Murray"
        },
        {
          id: 3,
          name: "Emilia Clarke"
        }
      ]
    };
  }

  deleteActor(id) {
    // debugger
    let actors = [...this.state.actors];
    let deletePosition;

    for (let i = 0; i < actors.length; i++) {
      if (actors[i].id === id) {
        deletePosition = i;
      }
    }

    actors.splice(deletePosition, 1);

    this.setState({
      ...this.state,
      actors: actors
    });
  }

  render() {
    return (
      <section className="app">
        <ul>
          {this.state.actors.map(actor => (
            <Actor
              key={actor.id}
              payload={actor}
              onDelete={(e) => this.deleteActor(actor.id)}
            ></Actor>
          ))}
        </ul>
      </section>
    );
  }
}
