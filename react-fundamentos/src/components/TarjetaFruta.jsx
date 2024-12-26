function TarjetaFruta({ name, price, cantidad, agregar, quitar, limpiar }) {
  const subtotal = price * cantidad;
  const hasItem = cantidad > 0
  const styles = {

    border: '1px solid black',
    marginBottom: '1rem',
    borderRadius: '0.5rem',
    padding: '1rem',
    backgroundColor: hasItem ? 'seagreen' : 'lightcoral',
    color: hasItem ? '#fff' : '#000',
    transition: 'all 0.4s ease-in-out',
  };

  return (
    <div style={styles}>
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
