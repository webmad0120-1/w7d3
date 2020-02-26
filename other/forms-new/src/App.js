import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentActor: {
        name: "",
        age: 0,
        genre: "M"
      },
      rangeValueR: 5,
      rangeValueG: 5,
      rangeValueB: 5,
      nameHasErrors: false,
      ageHasErrors: false,
      nameSortingAscending: true,
      actors: [
        {
          id: 1,
          name: "bill murray",
          age: 71
        },
        {
          id: 2,
          name: "umma thurman",
          age: 39
        },
        {
          id: 3,
          name: "sean connery",
          age: 83
        }
      ]
    };
  }

  selectGenre(genre) {
    let actorUpdated = { ...this.state.currentActor };
    actorUpdated.genre = genre;

    this.setState({
      ...this.state,
      currentActor: actorUpdated
    });
  }

  updateActor(e, key) {
    let actorUpdated = { ...this.state.currentActor };
    actorUpdated[key] = e.target.value;

    this.setState({
      ...this.state,
      currentActor: actorUpdated
    });
  }

  saveActor(e) {
    e.preventDefault();

    let nameHasErrors = false;
    let ageHasErrors = false;

    if (this.state.currentActor.name.length < 3) {
      nameHasErrors = true;
    }

    if (+this.state.currentActor.age <= 0) {
      ageHasErrors = true;
    }

    if (nameHasErrors || ageHasErrors) {
      this.setState({
        ...this.state,
        nameHasErrors: nameHasErrors,
        ageHasErrors: ageHasErrors
      });
      return;
    }

    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    let actorsUpdated = [...this.state.actors];

    actorsUpdated.push({
      name: this.state.currentActor.name,
      age: this.state.currentActor.age,
      genre: this.state.currentActor.genre,
      id: randomInt(10, 100000000)
    });

    this.setState({
      ...this.state,
      nameHasErrors: false,
      ageHasErrors: false,
      currentActor: {
        name: "",
        age: 0,
        genre: "M"
      },
      actors: actorsUpdated
    });
  }

  deleteActor(id) {
    let actorsUpdated = [...this.state.actors];

    actorsUpdated = actorsUpdated.filter(actor => actor.id !== id);

    this.setState({
      ...this.state,
      actors: actorsUpdated
    });
  }

  sortByName() {
    let actorsUpdated = [...this.state.actors];
    let nameSortingAscendingUpdated = this.state.nameSortingAscending;
    nameSortingAscendingUpdated = !nameSortingAscendingUpdated;

    if (nameSortingAscendingUpdated) {
      actorsUpdated.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      actorsUpdated.sort((a, b) => b.name.localeCompare(a.name));
    }

    this.setState({
      ...this.state,
      nameSortingAscending: nameSortingAscendingUpdated,
      actors: actorsUpdated
    });
  }

  updateRangeValue(e, key) {
    if (key === "R") {
      this.setState({
        ...this.state,
        rangeValueR: e.target.value
      });
    }
    if (key === "G") {
      this.setState({
        ...this.state,
        rangeValueG: e.target.value
      });
    }
    if (key === "B") {
      this.setState({
        ...this.state,
        rangeValueB: e.target.value
      });
    }
  }

  render() {
    return (
      <section className="App">
        <div>
          {this.state.currentActor.name.length > 0 && (
            <h1>The current actor name is {this.state.currentActor.name}</h1>
          )}

          <div>
            <input
              type="range"
              min="0"
              max="255"
              value={this.state.rangeValueR}
              onChange={e => this.updateRangeValue(e, "R")}
            ></input>
            {this.state.rangeValueR}
          </div>
          <div>
            <input
              type="range"
              min="0"
              max="255"
              value={this.state.rangeValueG}
              onChange={e => this.updateRangeValue(e, "G")}
            ></input>
            {this.state.rangeValueG}
          </div>
          <div>
            <input
              type="range"
              min="0"
              max="255"
              value={this.state.rangeValueB}
              onChange={e => this.updateRangeValue(e, "B")}
            ></input>
            {this.state.rangeValueB}
          </div>
          <div style={{backgroundColor: `rgb(${this.state.rangeValueR}, ${this.state.rangeValueG}, ${this.state.rangeValueB})`}}>
            rgb({this.state.rangeValueR}, {this.state.rangeValueG}, {this.state.rangeValueB})
          </div>

          {this.state.rangeValueR > 5 && (
            <form>
              <input
                type="text"
                placeholder="actor name"
                onChange={e => this.updateActor(e, "name")}
                value={this.state.currentActor.name}
              />
              {this.state.nameHasErrors && <h3 className="error">The name has errors</h3>}
              <input
                type="text"
                placeholder="actor age"
                onChange={e => this.updateActor(e, "age")}
                value={this.state.currentActor.age}
              />
              {this.state.ageHasErrors && <h3 className="error">The age has errors</h3>}
              <label>
                M{" "}
                <input
                  type="radio"
                  name="genre"
                  onChange={() => this.selectGenre("M")}
                  checked
                ></input>
              </label>
              <label>
                F <input type="radio" name="genre" onChange={() => this.selectGenre("F")}></input>
              </label>
              <button onClick={e => this.saveActor(e)}>OK</button>
            </form>
          )}
        </div>
        {this.state.actors.length > 0 && (
          <table>
            <thead>
              <tr>
                <td>id</td>
                <td>
                  <a href="#" onClick={() => this.sortByName()}>
                    Name {this.state.nameSortingAscending ? "^" : "v"}
                  </a>
                </td>
                <td>Age</td>
                <td>Genre</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {this.state.actors.map((actor, idx) => (
                <tr key={idx}>
                  <td>{actor.id}</td>
                  <td>{actor.name}</td>
                  <td>{actor.age}</td>
                  <td>{actor.genre}</td>
                  <td>
                    <button onClick={() => this.deleteActor(actor.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    );
  }
}
