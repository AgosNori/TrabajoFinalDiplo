import { useEffect, useState } from 'react';


function Productos() {
    const [productos, setProductos] = useState([]);
   
    useEffect(() => {
      // Obtener datos de productos desde tu API
      fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(data => {
          setProductos(data);
        })
        .catch(error => {
          console.error('Error al obtener datos de productos:', error);
        });
    }, []);
  

    return (
        <>
        <h1>Productos desde API</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto.id}>
            <strong> Id: </strong>{producto.id_producto}<br />
            <strong> Nombre: </strong>{producto.nom_producto}<br />
            <strong> Descripción: </strong>{producto.descripcion_producto}<br />
            <strong> Precio: </strong>{producto.precio_producto}<br />
          </li>
        ))}
      </ul>
      </>


);
}

export default Productos;













