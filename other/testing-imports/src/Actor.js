import React, { Component } from "react";

export default class Actor extends Component {
  render() {
    return (
      <li>
        {this.props.payload.name} - id v2: {this.props.payload.id}{" "}
        <button onClick={() => this.props.onDelete()}>Delete</button>
      </li>
    );
  }
}
