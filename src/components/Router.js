import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MenuDepartamentos from './Crud/MenuDepartamentos';
import EmpleadoDetalle from './RutasEmpleados/EmpleadoDetalle';
import Departamentos from './Crud/Departamentos';
import InsertarDepartamento from './Crud/InsertarDepartamento';
import DetallesDepartamento from './Crud/DetallesDepartamento';
import UpdateDepartamento from './Crud/UpdateDepartamento';
import DeleteDepartamento from './Crud/DeleteDepartamento';

export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <MenuDepartamentos />
                    <Switch>
                        {/* <Route exact path="/empleadodetalle" component={EmpleadoDetalle} /> */}
                        <Route exact path="/" component={Departamentos} />
                        <Route exact path="/empleadodetalle/:idemple"
                            render={props => {
                                var idEmp = props.match.params.idemple;
                                console.log("Id " + idEmp);
                                return <EmpleadoDetalle idempleado={idEmp} />;
                            }} />
                        <Route exact path="/create" component={InsertarDepartamento} />
                        <Route exact path="/details/:id"
                            render={props => {
                                var id = props.match.params.id;
                                return <DetallesDepartamento iddepartamento={id} />;
                            }} />
                        <Route exact path="/update/:id/:nombre/:localidad"
                            render={props => {
                                var idDep = props.match.params.id;
                                var nomDep = props.match.params.nombre;
                                var locDep = props.match.params.localidad;
                                return <UpdateDepartamento iddep={idDep} nom={nomDep} loc={locDep} />;
                            }} />
                        <Route exact path="/delete/:id"
                            render={props => {
                                var id = props.match.params.id;
                                return <DeleteDepartamento iddept={id} />;
                            }} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
