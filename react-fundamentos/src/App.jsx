import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function TarjetaFruta (props) {
    return (
      <div>
        <h3>{props.name}</h3>
        <hr />
        <p>Precio: ${props.price}</p>
      </div>
    )
  }

  return (
    <div>
      <TarjetaFruta name="Manzana" price={10} />
      <TarjetaFruta  name="Pera"  price={12} />
      <TarjetaFruta  name="Platano" price={5} />
    </div>
  )
}

export default App
