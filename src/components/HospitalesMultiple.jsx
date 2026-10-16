import React, { Component } from 'react'
import ServiceHospitales from '../services/ServiceHospitales';

export default class HospitalesMultiple extends Component {
    service = new ServiceHospitales();
    selectHospital = React.createRef();

    state = {
        hospitales: []
    }

    loadHospitales = async () => {
        let datos = await this.service.getHospitales();
        console.log(datos);
        this.setState({
            hospitales: datos
        })
    }

    componentDidMount = async () => {
        await this.loadHospitales();
    }

    getHospitalesSeleccionados = (event) => {
        event.preventDefault();
        console.log("Ok");
    }

  render() {
    return (
      <div>
        <h1>Hospitales</h1>
        <form>
            <label> Seleccione un hospital </label>
            <select ref={this.selectHospital} className='form-control'
            size="6" multiple>
                
                {
                    this.state.hospitales.map((hospital, index) => {
                        return (<option key={index} value={hospital.idHospital}>
                            {hospital.nombre}
                        </option>)
                    })
                }
                
            </select>
            <button onClick={this.getHospitalesSeleccionados}
            className='btn btn-info'>
                Mostrar trabajadores
            </button>
        </form>
      </div>
    )
  }
}
