import { useEffect, useState } from 'react';
import '../Usuarios/Usuarios.css';
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
    <div className='users'>
    
      <ul className='container'>
        <h1>Usuarios desde la API</h1>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            <img src='./public/4092564-about-mobile-ui-profile-ui-user-website_114033.png'width="30px" className='logo'></img>
            <strong className='id'> Id: </strong>{usuario.id_usuario}<br />
            <strong className='name'> Nombre: </strong>{usuario.nom_usuario}<br />
            <strong className='username'> Usuario: </strong>{usuario.userName}<br />
            <strong className='birthdate'> Fecha de Nacimiento: </strong>{usuario.fecha_nac}<br />
          </li>
        ))}
      </ul>
    </div>
   
)
}
export default Usuarios


