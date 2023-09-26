import PropTypes from 'prop-types';

function Card({ nomProduct, descProduct, prProduct, nom, email, user, fecha }) {
  return (
    <div >
      <article>
        <h1>{nomProduct}</h1>
        <h2>${prProduct}</h2>
        <p>{descProduct}</p>
      </article>
      <article>
        <h1>{nom}</h1>
        <h3>{user}</h3>
        <p>{email}</p>
        <p>{fecha}</p>
      </article>
    </div>

  )
}

Card.propTypes = {
  nomProduct: PropTypes.string,
  descProduct: PropTypes.string,
  prProduct: PropTypes.number,
  nom: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  user: PropTypes.string,
  fecha: PropTypes.string.isRequired,
};
export default Card;


/*

import PropTypes from 'prop-types';
import { Card as AntCard } from 'antd';
import 'antd/dist/antd.css'; // Importa los estilos de Ant Design

function Card({ nom, email, user, fecha }) {
  return (
    <AntCard title={nom} style={{ width: 300 }}>
      <p>Email: {email}</p>
      <p>Usuario: {user}</p>
      <p>Fecha: {fecha}</p>
    </AntCard>
  );
}

Card.propTypes = {
  nom: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
};

export default Card;
*/