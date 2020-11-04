import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";
import Empleados from "./Empleados";

export default class Departamentos extends Component {
  cajaDeparRef = React.createRef();

  state = {
    opciones: [],
    empleados: [],
    status: false,
  };

  componentDidMount = () => {
    this.cargarDepartamentos();
  };

  cargarDepartamentos = () => {
    var options = [];
    var request = "api/departamentos";
    var url = Global.urldepar + request;
    axios.get(url).then((res) => {
      res.data.forEach((opc, i) => {
        options.push(
          <option key={i} value={opc.Numero}>
            {opc.Nombre}
          </option>
        );
      });
      this.setState({
        opciones: options,
      });
    });
  };

  cargarEmpleados = (e) => {
    e.preventDefault();
    var departamento = this.cajaDeparRef.current.value;
    var request = "api/Empleados/EmpleadosDepartamento/" + departamento;
    var url = Global.urlemple + request;
    axios.get(url).then((res) => {
      this.setState({
        status: true,
        empleados: res.data,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Departamentos y Empleados</h1>
        <form onSubmit={this.cargarEmpleados}>
          <label>Departamentos: </label>
          <select name="selectdepar" ref={this.cajaDeparRef}>
            {this.state.opciones}
          </select>{" "}
          &nbsp;
          <button>Buscar empleados</button>
        </form>
        {this.state.status && (
          <div>
            <h3>Sin el componente Empleados</h3>
            <ul>
              {this.state.empleados.map((emple, i) => {
                return <li key={i}>{emple.apellido}</li>;
              })}
            </ul>
            <hr />
            <h3>Enviamos uno a uno todos los empleados</h3>
            <ul>
              {this.state.empleados.map((emple, i) => {
                return <Empleados emples={emple} key={i} />;
              })}
            </ul>
            <hr />
            <h3>Enviamos el array de state de empleados</h3>
            <Empleados empleados={this.state.empleados} />
            <hr />
          </div>
        )}
      </div>
    );
  }
}
