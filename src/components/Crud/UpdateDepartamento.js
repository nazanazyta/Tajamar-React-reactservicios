import React, { Component } from 'react';
import axios from 'axios';
import Global from './../../Global';
import { Redirect, NavLink } from 'react-router-dom';

export default class UpdateDepartamento extends Component {

    cajaNumeroRef = React.createRef();
    cajaNombreRef = React.createRef();
    cajaLocalidadRef = React.createRef();

    state = { status: false };

    modificarDepartamento = (e) => {
        e.preventDefault();
        var num = parseInt(this.cajaNumeroRef.current.value);
        var nom = this.cajaNombreRef.current.value;
        var loc = this.cajaLocalidadRef.current.value;
        var dept = {
            numero: num
            , nombre: nom
            , localidad: loc
        };
        var request = "api/departamentos";
        var url = Global.urlcruddept + request;
        axios.put(url, dept).then(res => {
            this.setState({status: true});
        });
    }

    render() {
        if(this.state.status === true){
            return <Redirect to="/" />
            // return <Redirect to={"/details/" + this.props.iddep} />
        }
        return (
            <div>
                <h1>Modificar departamento {this.props.iddep}, {this.props.nom}, {this.props.loc}</h1>
                <NavLink to={"/details/" + this.props.iddep} className="btn btn-success">Volver</NavLink>
                <form onSubmit={this.modificarDepartamento} style={{width: "50%", margin: "auto"}}>
                    <label>Número: </label>
                    <input type="number" name="cajanumero" ref={this.cajaNumeroRef}
                        className="form-control" value={this.props.iddep} readOnly />
                    <label>Nombre: </label>
                    <input type="text" name="cajanombre" ref={this.cajaNombreRef}
                        className="form-control" defaultValue={this.props.nom} />
                    <label>Localidad: </label>
                    <input type="text" name="cajalocalidad" ref={this.cajaLocalidadRef}
                        className="form-control" defaultValue={this.props.loc} /><br />
                    <button className="btn btn-info">Modificar</button>
                </form>
            </div>
        )
    }
}
