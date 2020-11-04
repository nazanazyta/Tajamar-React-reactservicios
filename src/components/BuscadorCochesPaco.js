import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class BuscadorCoches extends Component {
    cajaMarcaRef = React.createRef();
    state = {
        coches: []
        , status: null
        , search: []
    }

    componentDidMount = () => {
        this.cargarCoches();
    }

    cargarCoches = () => {
        var request = "webresources/coches";
        var url = Global.urlcoches + request;
        axios.get(url).then(res => {
            this.setState({
                coches: res.data
                , search: res.data
                , status: true
            });
        });
    }

    buscarCoches = e => {
        e.preventDefault();
        //VOY A FILTRAR POR TODO EL ARRAY DE COCHES QUE TENEMOS GUARDADO
        //RECUPERO TODO LOS COCHES
        var coches = this.state.coches;
        var marca = this.cajaMarcaRef.current.value.toLowerCase();
        //metodo filter de un array
        //Array.filter(objeto => objeto.propiedad == ??)
        var filtro = coches.filter(car => car.marca.toLowerCase().includes(marca));
        this.setState({
            search: filtro
        });
    }

    mostrarTodos = (e) => {
        e.preventDefault();
        this.setState({
            search: this.state.coches
        });
    }

    render() {
        return (
            <div>
                <h1>Buscador de coches</h1>
                <form>
                    <label>Marca: </label>
                    <input type="text" name="cajamarca" ref={this.cajaMarcaRef}/> &nbsp;
                    <button onClick={this.buscarCoches}>Buscar</button> &nbsp;
                    <button onClick={this.mostrarTodos}>Mostrar TODOS</button>
                </form><br />
                {(this.state.status === true && this.state.search.length > 0) &&
                (
                    <table border="1" align="center">
                        <thead>
                            <tr>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Conductor</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.search.map((car, i) => {
                                return (
                                <tr key={i}>
                                    <td>{car.marca}</td>
                                    <td>{car.modelo}</td>
                                    <td>{car.conductor}</td>
                                    <td><img style={{width: "150px", height: "150px"}} src={car.imagen} alt={car.marca}/></td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )}
                {/* // (<div>
                //     <h1 style={{color: "blue"}}>Name: {this.state.customer.contactName}</h1>
                //     <h2>Company: {this.state.customer.companyName}</h2>
                //     <h3>Ciudad: {this.state.customer.city}</h3>
                //     <h3>Oficio: {this.state.customer.contactTitle}</h3>
                // </div>)} */}
            </div>
        )
    }
}
