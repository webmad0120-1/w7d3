import React from "react";

class MovieDetails extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.movie.name}</h1>
        <h1>{this.props.movie.year}</h1>
        <h1>{this.props.movie.director}</h1>
      </div>
    );
  }
}

export default MovieDetails;
