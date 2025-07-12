import React from 'react';
import styles from "../app/page.module.css";

const Producto = ({ producto, index, eliminarProducto }) => {
  const { nombre, marca, cantidad, precio } = producto;

  return (
    <div className={styles.list}>
      <h3>{nombre} ({marca})</h3>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: ${precio.toFixed(2)}</p>
      <button className={styles.btn_delete} onClick={() => eliminarProducto(index)}>Eliminar</button>
    </div>
  );
};

export default Producto;
