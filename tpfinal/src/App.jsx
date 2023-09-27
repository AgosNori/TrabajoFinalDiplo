/*import { useEffect, useState } from 'react'

import Card from './components/card/Card';

function App() {
  const [productos, setProduct] = useState([]);
  const [usuarios, setUser] = useState([]);
  useEffect(() => {

    fetch("http://localhost:3000/usuarios")
      .then(response => response.json())
      .then(data => {
        setUser(data)

      })
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(datos => {
        console.log(datos);
      })
      .catch(error =>{
        console.error("error al obtener los datos",error)
      })
  }, [])


  return (
    <>
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Card
          key={producto.id_producto}
          nomProduct={producto.nom_producto}
          prProduct={producto.precio_producto}
          descProduct={producto.descripcion_producto}
        />

      ))}

      <h1>Lista de Usuarios</h1>
      {usuarios.map(usuario => (
        <Card
          key={usuario.id_usuario}
          nom={usuario.nom_usuario}
          email={usuario.email_usuario}
          user={usuario.username}
          fecha={usuario.fecha_nac}

        />))}
    </>
  )
}

export default App

import { useEffect, useState } from 'react';

function App() {
  const [productos, setProductos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Obtener datos de productos en formato JSON
    fetch("http://localhost:3000/products")
    .then(response => {
      if (!response.ok) {
        throw new Error('La solicitud falló');
      }
      return response.json();
    })
    .then(data => {
      setProductos( convertToJSON(data) 
      );
    })
    .catch(error => {
      console.error('Error al obtener datos de productos:', error);
    });

    // Obtener datos de usuarios en formato JSON
    fetch("http://localhost:3000/usuarios")
      .then(response => response.json())
      .then(data => {
        setUsuarios(data);
      })
      .catch(error => {
        console.error('Error al obtener datos de usuarios:', error);
      });
  }, []);
  const convertToJSON = () => {
    const jsonData = JSON.stringify(productos, null, 2);
    console.log(jsonData);
  };
  return (
    <>
      <h1>Lista de productos</h1>
      <ul>
        {productos.map(producto => (
          <li key={producto.id_producto}>
            <strong>Id:</strong> {producto.id_producto}<br />
            <strong>Nombre:</strong> {producto.nom_producto}<br />
            <strong>Descripción:</strong> {producto.descripcion_producto}<br />
            <strong>Precio:</strong> {producto.precio_producto}<br />
          </li>
        ))}
      </ul>

      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id_usuario}>
            <strong>Nombre:</strong> {usuario.nom_usuario}<br />
            <strong>Email:</strong> {usuario.email_usuario}<br />
            <strong>Usuario:</strong> {usuario.userName}<br />
            <strong>Fecha de Nacimiento:</strong> {usuario.fecha_nac}<br />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
*/


import Navbar from './components/Navbar/Navbar';
import Productos from './components/Productos/Productos';
import Usuarios from './components/Usuarios/Usuarios';

function App() {

  return (
    <div>
     
    <Navbar/>
     {/* <Link to={"/productos"}> Ir a productos.</Link>*/}
 <Productos/>
      <Usuarios/>
  
    </div>
  );
}

export default App;
