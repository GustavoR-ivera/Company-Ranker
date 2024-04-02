import React from 'react';
import { Link } from 'react-router-dom';
import "./goBack.scss"; // Importa tu archivo de estilos CSS

const GoBack = () => {
  return (
    <Link to="/" className="go-back">
      <span className="arrow"></span>
      <span className="text">Regresar</span>
    </Link>
  );
};

export default GoBack;