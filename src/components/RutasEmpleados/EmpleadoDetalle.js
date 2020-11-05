import React, { Component } from 'react';
import Global from './../../Global';
import axios from 'axios';

export default class EmpleadoDetalle extends Component {
    //VAMOS A RECIBIR PROPS CON UN CONSTRUCTOR
    constructor(props){
        super(props);
        //IDEMPLEADO
        console.log("Props Detalle " + this.props.idempleado);

    }

    state = {
        empleado: {}
        , status: false
    }

    mostrarEmpleado = () => {
        var request = "api/empleados/" + this.props.idempleado;
        var url = Global.urlemple + request;
        axios.get(url).then(res => {
            this.setState({
                empleado: res.data
                , status: true
            })
        });
    }

    componentDidMount = () => {
        this.mostrarEmpleado();
    }

    render() {
        return (
            <div>
                <h1>Detalles del empleado</h1>
                {this.state.status === true && 
                (
                    <div>
                        <h1 style={{color: "blue"}}>Apellido: {this.state.empleado.apellido}</h1>
                        <h1 style={{color: "lightgreen"}}>Oficio: {this.state.empleado.oficio}</h1>
                    </div>
                )}
            </div>
        )
    }
}
