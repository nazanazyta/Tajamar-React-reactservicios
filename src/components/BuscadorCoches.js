import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class BuscadorCoches extends Component {
    cajaMarcaRef = React.createRef();
    state = {
        coches: []
        , status: null
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
                , status: true
            });
        });
    }

    buscarCoche = e => {
        e.preventDefault();
        var marca = this.cajaMarcaRef.current.value;
        var misCoches = [];
        var request = "webresources/coches";
        var url = Global.urlcoches + request;
        axios.get(url).then(res => {
            res.data.forEach((coche) => {
                if(coche.marca === marca){
                    misCoches.push(coche);
                }
            });
            this.setState({
                coches: misCoches
                , status: true
            });
        });
    }

    render() {
        return (
            <div>
                <h1>Buscador de coches</h1>
                <form onSubmit={this.buscarCoche}>
                    <label>Marca: </label>
                    <input type="text" name="cajamarca" ref={this.cajaMarcaRef}/> &nbsp;
                    <button>Buscar</button>
                </form><br />
                {(this.state.status === true && this.state.coches.length > 0) &&
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
                            {this.state.coches.map((car, i) => {
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
