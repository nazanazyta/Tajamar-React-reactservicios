import React, { Component } from "react";
// import axios from 'axios';
// import Global from '../../Global';

export default class Empleados extends Component {
  render() {
    if (this.props.emples !== undefined) {
      return <li>{this.props.emples.apellido}</li>;
    } else if (this.props.empleados.length > 0) {
      return (
        <ul>
          {this.props.empleados.map((emple, i) => {
            return <li key={i}>{emple.apellido}</li>;
          })}
        </ul>
      );
    }
  }
}
