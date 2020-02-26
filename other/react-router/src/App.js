import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Navigation from "./Navigation";
import NotFound404 from "./notFound404";
import MovieDetail from "./MovieDetail";
import Calculator from "./Calculator";
import Ticker from "./Ticker";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: [
        {
          id: 1,
          name: "The Shawshank Redemption",
          year: "1994",
          director: "Frank Darabont",
          duration: "2h 22min",
          genre: ["Crime", "Drama"],
          rate: "9.3"
        },
        {
          id: 2,
          name: "The Godfather",
          year: "1972",
          director: "Francis Ford Coppola",
          duration: "2h 55min",
          genre: ["Crime", "Drama"],
          rate: "9.2"
        },
        {
          id: 3,
          name: "The Godfather: Part II",
          year: "1974",
          director: "Francis Ford Coppola",
          duration: "3h 22min",
          genre: ["Crime", "Drama"],
          rate: "9.0"
        },
        {
          id: 4,
          name: "The Dark Knight",
          year: "2008",
          director: "Christopher Nolan",
          duration: "2h 32min",
          genre: ["Action", "Crime", "Drama", "Thriller"],
          rate: "9.0"
        },
        {
          id: 5,
          name: "12 Angry Men",
          year: "1957",
          director: "Sidney Lumet",
          duration: "1h 36min",
          genre: ["Crime", "Drama"],
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
              path="/movies/:id"
              render={props => {
                let filteredMovies = this.state.movies.filter(movie => movie.id === +props.match.params.id)

                return (
                  <Home
                    movies={filteredMovies}
                  ></Home>
                );
              }}
            />

            <Route
              exact
              path="/movies"
              render={() => {
                let allMovies = this.state.movies
                return <Home movies={allMovies}></Home>;
              }}
            />

            <Route
              path="/calculator"
              render={() => {
                return <Calculator />;
              }}
            />

            <Route
              path="/financial"
              render={() => {
                return (
                  <div>
                    <Ticker price={Math.round(Math.random() * 300)} company="APPL"></Ticker>
                    <Ticker price="300" company="BAIRES"></Ticker>
                    <Ticker price="50" company="FUENLA"></Ticker>
                  </div>
                );
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
