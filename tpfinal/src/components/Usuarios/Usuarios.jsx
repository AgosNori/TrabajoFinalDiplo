import { useEffect, useState } from 'react';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/usuarios")
            .then(response => response.json())
            .then(data => {
                setUsuarios(data);
            })
    }, []);

return(
    <>
     <h1>Usuarios desde la API</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            <strong> Id: </strong>{usuario.id_usuario}<br />
            <strong> Nombre: </strong>{usuario.nom_usuario}<br />
            <strong> Usuario: </strong>{usuario.userName}<br />
            <strong> Fecha de Nacimiento: </strong>{usuario.fecha_nac}<br />
          </li>
        ))}
      </ul>
    </>
   
)
}
export default Usuarios


