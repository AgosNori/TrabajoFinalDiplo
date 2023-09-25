import PropTypes from 'prop-types';
function Card ({nom_producto,descripcion_producto, precio_producto}){
    return(
        <article>
            <h1>{nom_producto}</h1>
            <h2>${precio_producto}</h2>
            <p>{descripcion_producto}</p>
        </article>
    )
}

Card.propTypes = {
    nom_producto: PropTypes.string.isRequired,
    descripcion_producto: PropTypes.string.isRequired,
    precio_producto: PropTypes.string.isRequired,
};
export default Card;

