import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";
import NotFound404 from "./notFound404";
import MovieDetail from "./MovieDetail";
import Calculator from "./Calculator";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [
        {
          name: "The Shawshank Redemption",
          year: "1994",
          director: "Frank Darabont",
          duration: "2h 22min",
          genre: ["Crime", "Drama"],
          rate: "9.3"
        },
        {
          name: "The Godfather",
          year: "1972",
          director: "Francis Ford Coppola",
          duration: "2h 55min",
          genre: ["Crime", "Drama"],
          rate: "9.2"
        },
        {
          name: "The Godfather: Part II",
          year: "1974",
          director: "Francis Ford Coppola",
          duration: "3h 22min",
          genre: ["Crime", "Drama"],
          rate: "9.0"
        },
        {
          name: "The Dark Knight",
          year: "2008",
          director: "Christopher Nolan",
          duration: "2h 32min",
          genre: ["Action", "Crime", "Drama", "Thriller"],
          rate: "9.0"
        },
        {
          name: "12 Angry Men",
          year: "1957",
          director: "Sidney Lumet",
          duration: "1h 36min",
          genre: ["Crime", "Drama"],
          rate: "8.9"
        },
        {
          name: "Schindler's List",
          year: "1993",
          director: "Steven Spielberg",
          duration: "3h 15min",
          genre: ["Biography", "Drama", "History"],
          rate: "8.9"
        }
      ]
    };
  }

  render = () => {
    return (
      <div className="App">
        <Navigation></Navigation>
        <header className="App-header">
          {/* https://stackoverflow.com/questions/49162311/react-difference-between-route-exact-path-and-route-path */}
          <Switch>
            <Route
              exact
              path="/movies"
              render={() => {
                return <Home movies={this.state.movies}></Home>;
              }}
            />
            <Route
              exact
              path="/verPeli/:chosenMovie"
              render={props => {
                debugger;
                var chosenMovie = props.match.params.chosenMovie;
                

                return (
                  <MovieDetail
                    movie={this.state.movies[chosenMovie]}
                  ></MovieDetail>
                );
              }}
            />
            <Route
              path="/calculator"
              render={() => {
                return <Calculator />;
              }}
            />

            <Route
              path="/hector"
              render={() => {
                return <About />;
              }}
            />

            <Route component={NotFound404} />
          </Switch>
        </header>
      </div>
    );
  };
}

export default App;
