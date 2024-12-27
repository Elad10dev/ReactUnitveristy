import React, { Component } from "react";

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

class PersistenciaEventos extends Component {
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
);

export default App;
