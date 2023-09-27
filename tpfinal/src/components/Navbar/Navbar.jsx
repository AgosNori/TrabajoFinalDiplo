
import '../Navbar/Navbar.css';
const Navbar = () => {
  return (
    <nav className='navb'>
      <ul className='list'>
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca">Acerca de</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
