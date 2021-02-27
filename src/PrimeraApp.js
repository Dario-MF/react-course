import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {
    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    )
}

PrimeraApp.prototype = {
    saludo: PropTypes.string
}
PrimeraApp.defaultProps = {
    subtitulo: 'Hola soy un subtitulo'
}

export default PrimeraApp
