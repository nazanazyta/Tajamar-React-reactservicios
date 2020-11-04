import React, { Component } from 'react';
//AGREGAR LA LIBRERÍA DE axios
import axios from 'axios';

export default class Customers extends Component {
    urlcustomers = "http://northwind.netcore.io/customers?format=json";
    
    //ALMACENAMOS LOS CLIENTES EN STATE
    state = {
        customers: []
        , status: null
    };

    cargarClientes = () => {
        axios.get(this.urlcustomers).then(res => {
            // console.log(res.data);
            // console.log(res.data.customers);
            this.setState({
                customers: res.data.customers
            })
        });
    }

    componentDidMount = () => {
        this.cargarClientes();
    }

    render(){
        if(this.state.customers.length > 0){
            //TENEMOS CLIENTES
            return (
                <div>
                    <h1 style={{color: "orange"}}><u>Servicio Api Customers</u></h1>
                    {
                        this.state.customers.map(cliente => {
                            return(<h2 style={{color: "blue"}} key={cliente.id}>{cliente.contactName}</h2>);
                        })
                    }
                </div>
            );
        }else if(this.state.customers.length === 0){
            //NO HEMOS CARGADO CLIENTES
            return (<h1>No hay clientes</h1>);
        }else if(this.state.status !== "success"){
            //EL SERVICIO NO HA TERMINADO DE PROCESAR
            return (<h1>Cargando servicios...</h1>);
        }else{
            //OTRA OPCIÓN
            return (<h1>Algo ha ido mal...</h1>);
        }        
    }
}