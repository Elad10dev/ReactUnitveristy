import React from 'react';
import './TarjetaFruta.css';  // Asegúrate de importar el archivo CSS

function TarjetaFruta({ name, price, cantidad, agregar, quitar, limpiar }) {
  const subtotal = price * cantidad;
  const hasItem = cantidad > 0;
  const clases = `tarjeta-fruta ${hasItem ? 'has-item' : 'no-item'}`

  return (
    <div className={clases}>
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

export default TarjetaFruta;
