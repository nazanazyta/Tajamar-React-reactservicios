import React, { Component } from 'react'
import axios from 'axios';
import Global from '../Global';

export default class BuscarCustomer extends Component {
    cajaCustomerRef = React.createRef();
    state = {
        customer: {}
        , status: false
    }
    
    buscarCliente = e => {
        e.preventDefault();
        var idcli = this.cajaCustomerRef.current.value;
        var request = "customers/" + idcli + ".json";
        var url = Global.urlnorthwind + request;
        axios.get(url).then(res => {
            this.setState({
                customer: res.data.customer
                , status: true
            });
        });
    }
    
    render() {
        return (
            <div>
                <h1>Buscador Customer</h1>
                <form onSubmit={this.buscarCliente}>
                    <label>Id Customer: </label>
                    <input type="text" name="cajacustomer" ref={this.cajaCustomerRef} />
                    <button>Buscar cliente</button>
                </form>
                {this.state.status === true &&
                (<div>
                    <h1 style={{color: "blue"}}>Name: {this.state.customer.contactName}</h1>
                    <h2>Company: {this.state.customer.companyName}</h2>
                    <h3>Ciudad: {this.state.customer.city}</h3>
                    <h3>Oficio: {this.state.customer.contactTitle}</h3>
                </div>)}
            </div>
        )
    }
}
