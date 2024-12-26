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
  
  export default TarjetaFruta;
  