import React, { Component } from 'react'

export default class UpdateDepartamento extends Component {
    render() {
        return (
            <div>
                <h1>Modificar departamento {this.props.iddep}, {this.props.nom}, {this.props.loc}</h1>
            </div>
        )
    }
}
