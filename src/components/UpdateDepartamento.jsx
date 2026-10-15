import React, { Component } from 'react'

export default class UpdateDepartamento extends Component {
  render() {
    return (
      <div>
        <h1>Update Departamento</h1>
        <h2>Id: {this.props.id}</h2>
        <h2>Nombre: {this.props.nombre}</h2>
        <h2>Localidad: {this.props.localidad}</h2>
      </div>
    )
  }
}
