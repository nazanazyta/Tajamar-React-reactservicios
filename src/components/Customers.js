import React, { Component } from 'react';
//AGREGAR LA LIBRERÍA DE axios
import axios from 'axios';

export default class Customers extends Component {
    urlcustomers = "http://northwind.netcore.io/customers?format=json";
    
    //ALMACENAMOS LOS CLIENTES EN STATE
    state = {
        customers: []
    };

    cargarClientes = () => {
        axios.get(this.urlcustomers).then(res => {
            console.log(res.data);
            console.log(res.data.customers);
            this.setState({
                customers: res.data.customers
            })
        });
    }

    componentWillMount = () => {
        this.cargarClientes();
    }

    render(){
        return (
            <div>
                <h1>Servicio Api Customers</h1>
                {
                    this.state.customers.map(cliente => {
                        return(<h2 key={cliente.id}>{cliente.contactName}</h2>);
                    })
                }
            </div>
        )
    }
}