import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/card/Card';

function App() {
  const [product, setProduct] = useState([]);
  //const [user, setUser] = useState([]);
  useEffect(() => {
  
       fetch("http://localhost:3000")
      .then(response => response.json())
      .then(data =>{
        setProduct(JSON.parse(data))
        //setUser(data.user)
  })
},[])


return (
  <>
  <h1>Lista de productos</h1>
  {product.map(product => (
    <Card
      key={product.id_producto}
      nom_producto={product.nom_producto}
      descripcion_producto={product.descripcion_producto}
      precio_producto={product.precio_producto}
    />
  ))}
</>
)
}

export default App
