"use client";
import React, { useState, useEffect } from 'react';
import Producto from './Producto';
import styles from "../app/page.module.css";

const Form = () => {
  const [producto, setProducto] = useState({
    nombre: '',
    marca: '',
    cantidad: '',
    precio: ''
  });

  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    const { nombre, marca, cantidad, precio } = producto;

    if (!nombre || !marca || !cantidad || !precio) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (isNaN(cantidad) || isNaN(precio)) {
      alert('Cantidad y Precio deben ser valores numéricos');
      return;
    }

    const nuevoProducto = {
      nombre,
      marca,
      cantidad: parseInt(cantidad),
      precio: parseFloat(precio)
    };

    setProductos([...productos, nuevoProducto]);
    setProducto({ nombre: '', marca: '', cantidad: '', precio: '' });
  };

  const eliminarProducto = (indice) => {
    const copia = [...productos];
    copia.splice(indice, 1);
    setProductos(copia);
  };

  useEffect(() => {
    const nuevoTotal = productos.reduce(
      (acc, item) => acc + item.cantidad * item.precio,
      0
    );
    setTotal(nuevoTotal);
  }, [productos]);

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <label>Agregar Producto</label><br />
        <input
          className={styles.form_input}
          type='text'
          name='nombre'
          placeholder='Nombre'
          value={producto.nombre}
          onChange={handleChange}
        />
        <input
          className={styles.form_input}
          type='text'
          name='marca'
          placeholder='Marca'
          value={producto.marca}
          onChange={handleChange}
        />
        <input
          className={styles.form_input}
          type='number'
          name='cantidad'
          placeholder='Cantidad'
          value={producto.cantidad}
          onChange={handleChange}
        />
        <input
          className={styles.form_input}
          type='number'
          name='precio'
          placeholder='Precio'
          step='0.01'
          value={producto.precio}
          onChange={handleChange}
        />
        <button className={styles.form_button} onClick={handleClick}>Agregar</button>
      </form>

      <h2>Total: ${total.toFixed(2)}</h2>

      {
        productos.map((prod, index) => (
          <Producto
            producto={prod}
            key={index}
            index={index}
            eliminarProducto={eliminarProducto}
          />
        ))
      }
      <h2 className={styles.total}>Total: ${total.toFixed(2)}</h2>

    </>
  );
};

export default Form;
