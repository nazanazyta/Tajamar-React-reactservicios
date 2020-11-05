import React, { Component } from 'react'
import Global from './../../Global';
import axios from 'axios';

export default class EmpleadosRouter extends Component {
    state = {
        empleados: []
        , status: false
    }

    cargarEmpleados = () => {
        var request = "api/empleados";
        var url = Global.urlemple + request;
        axios.get(url).then(res => {
            this.setState({
                empleados: res.data
                , status: true
            })
        })
    }

    componentDidMount = () => {
       this.cargarEmpleados(); 
    }

    render() {
        return (
            <div>
                <h1>Rutas de empleados</h1>
                <ul>
                    {this.state.status === true &&
                    (
                        this.state.empleados.map((emp, i) => {
                            return(
                            <li key={i}>
                                {emp.apellido} &nbsp;
                                <a href={"/empleadodetalle/" + emp.idEmpleado}>Detalle</a>
                            </li>)
                        })
                    )}
                </ul>
                {/* <a href="/empleadodetalle/11">Detalle empleado 11</a><br />
                <a href="/empleadodetalle/22">Detalle empleado 22</a> */}
            </div>
        )
    }
}
