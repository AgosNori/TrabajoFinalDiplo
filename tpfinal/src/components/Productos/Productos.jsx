import { useEffect, useState } from 'react';
import '../Productos/Productos.css';

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
    <div className='prod'>

      <ul className='container'>
        <h1>Productos desde API</h1>
        {productos.map(producto => (
          <li key={producto.id}>
            <img className='logo' src="public/facial_cream_beauty_skincare_cosmetics_icon_186803.png" width="30px" />
            <strong className='id'> Id: </strong>{producto.id_producto}<br />
            <strong className='nom'> Nombre: </strong>{producto.nom_producto}<br />
            <strong className='desc'> Descripción: </strong>{producto.descripcion_producto}<br />
            <strong className='precio'> Precio: </strong>{producto.precio_producto}<br />
          </li>
        ))}
      </ul>
    </div>


  );
}

export default Productos;













