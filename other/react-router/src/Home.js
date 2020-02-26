import React from "react";
import { Link } from "react-router-dom";

class home extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.movies.map((movie, idx) => {
            return (
              <li key={idx}>
                <Link to={"/movies/" + movie.id}>{movie.name}</Link> -{" "}
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
