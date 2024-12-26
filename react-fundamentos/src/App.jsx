import { useState } from 'react';
import './App.css';
import React from 'react';
import TarjetaFruta from './components/TarjetaFruta.jsx';
import TotalPagar from './components/TotalPagar.jsx';

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
