import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';

/*function TarjetaFruta (props) {
    return (
      <div>
        <h3>{props.name}</h3>
        <hr />
        <p>Precio: ${props.price}</p>
      </div>
    )*/ 

class TarjetaFruta extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: 0
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <div>Cantidad: {this.state.cantidad}</div>
        <button onClick={() => this.setState({ cantidad: this.state.cantidad + 1 })}>
          Agregar
        </button>
        <hr />
        <p>Precio: ${this.props.price}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <TarjetaFruta name="Manzana" price={10} />
      <TarjetaFruta name="Pera" price={12} />
      <TarjetaFruta name="Plátano" price={5} />
    </div>
  );
}

export default App;
