import React, { Component } from 'react'
import loading from './../assets/images/loading.gif';

export default class HomeComponent extends Component {
    state= {
        status: false
    }

  render() {
    if (this.state.status == true) {
        return (
            <div>
                <h1>Home Component</h1>
            </div>
        )
    } else {
        return (<img src={loading} alt="loading..."/>)
    }
  }
}