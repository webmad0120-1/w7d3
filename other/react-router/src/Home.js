import React from "react";
import { Link } from "react-router-dom";

class home extends React.Component {
  constructor(props) {
    super();

    this.state = {
      movies: props.movies
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.movies.map((movie, idx) => {
            return (
              <li key={idx}>
                <Link to={"/verPeli/" + idx}>{movie.name}</Link> -{" "}
                {movie.director} ({movie.year})
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default home;
