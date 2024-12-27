import React, { Component } from "react";
import "./global.css";

/*class App extends Component {
  
  manejador = (e) => {
    e.preventDefault()
    console.log(e.nativeEvent)
  }
  
  render() {
    return (
      <div>
        <a 
          href="https://www.google.com"
          onClick={this.manejador}
          // onClick="alert('hello')"
        >
          Google
        </a>
      </div>
    );
  }
}*/

/*class PersistenciaEventos extends Component {
  state = {
    color: "green",
  };

  handleChange = (e) => {
    const color = e.target.value;
    console.log(color);
    this.setState({
      color: color,
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <h1 style={{ color: this.state.color }}>
          {this.state.color}
        </h1>
      </div>
    );
  }
}

const App = () => (
  <div>
    <PersistenciaEventos />
  </div>
);*/
class Hijo extends Component {
  manejadorClick = () => {
    this.props.onSaluda("Ninja en React 🔥");
  }
  render() {
    return (
      <div className="box blue">
        <h2>Hijo</h2>
        
        <button onClick={this.manejadorClick}>Saluda</button>
      </div>
    );
  }
}
class App extends Component {
  state = {
    name:''
  }
  manejador = (name) => {
    this.setState({
      name
    });
  }
  render() {
    return (
      <div className="box red">
        <Hijo 
        onSaluda={this.manejador}
        />
        <h1> {this.state.name} </h1>
      </div>
    );
  }
}

export default App;
