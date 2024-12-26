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

    const METHODS =[
      'agregar',
      'quitar',
      'limpiar',
    ]
    METHODS.forEach((method) => {
      this[method] = this[method].bind(this)
    }) 

    this.state = {
      cantidad: 0
    };
  }

  agregar(){
    if(this.state.cantidad < 10 && this.state.cantidad >= 0)
    this.setState({cantidad: this.state.cantidad + 1})}

  quitar(){
    if(this.state.cantidad > 0 && this.state.cantidad <= 10)
    this.setState({cantidad: this.state.cantidad - 1 })}

  limpiar(){
    this.setState({cantidad: 0})
  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <div>Cantidad: {this.state.cantidad}</div>
        <button onClick={() => this.agregar()}>
          +
        </button>
        <button onClick={() => this.limpiar()}>Limpiar</button>
        <button onClick={() => this.quitar()}>
          -
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
