import { useState } from 'react';
import './App.css';
import React from 'react';

function TarjetaFruta({ name, price, cantidad, agregar, quitar, limpiar }) {
  const subtotal = price * cantidad;
  
  return (
    <div>
      <h3>{name}</h3>
      <div>Cantidad: {cantidad}</div>
      <button onClick={agregar}>+</button>
      <button onClick={quitar}>-</button>
      <button onClick={limpiar}>Limpiar</button>
      <hr />
      <p>Precio: ${price}</p>
      <p>Sub-total: ${subtotal}</p>
    </div>
  );
}

const TotalPagar = ({ total }) => {
  return (
    <div>
      <h3>Total a pagar: ${total}</h3>
    </div>
  );
}

function App() {
  const [productos, setProductos] = useState([
    { id: 1, name: 'Manzana', price: 10, cantidad: 0 },
    { id: 2, name: 'Pera', price: 12, cantidad: 0 },
    { id: 3, name: 'Plátano', price: 5, cantidad: 0 },
  ]);

  const agregar = (id) => {
    setProductos(productos.map(producto => {
      if (producto.id === id && producto.cantidad < 10) {
        return { ...producto, cantidad: producto.cantidad + 1 };
      }
      return producto;
    }));
  };

  const quitar = (id) => {
    setProductos(productos.map(producto => {
      if (producto.id === id && producto.cantidad > 0) {
        return { ...producto, cantidad: producto.cantidad - 1 };
      }
      return producto;
    }));
  };

  const limpiar = (id) => {
    setProductos(productos.map(producto => {
      if (producto.id === id) {
        return { ...producto, cantidad: 0 };
      }
      return producto;
    }));
  };

  const total = productos.reduce((acc, producto) => acc + (producto.price * producto.cantidad), 0);

  return (
    <div>
      {productos.map(producto => (
        <TarjetaFruta
          key={producto.id}
          name={producto.name}
          price={producto.price}
          cantidad={producto.cantidad}
          agregar={() => agregar(producto.id)}
          quitar={() => quitar(producto.id)}
          limpiar={() => limpiar(producto.id)}
        />
      ))}
      <TotalPagar total={total} />
    </div>
  );
}

export default App;
