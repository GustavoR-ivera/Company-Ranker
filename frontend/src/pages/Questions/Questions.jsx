import "./questions.scss";
import NavBar from "../../components/navBar/NavBar.jsx";
import React from 'react';

function Questions() {
  return (
    <div className="faq-container">
      <NavBar />
      <div className="faq-list">
        <h1>Preguntas Frecuentes</h1>
        <Accordion title="¿Cómo puedo comenzar?" content="Para empezar, simplemente..." />
        <Accordion title="¿Qué hago si olvidé mi contraseña?" content="Si olvidaste tu contraseña,..." />
        <Accordion title="¿Cómo puedo contactar al soporte técnico?" content="Puedes contactar al soporte técnico..." />
        {/* Agrega más preguntas y respuestas aquí */}
      </div>
    </div>
  );
}

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleAccordion} className="accordion-title">
        {title} {isOpen ? '-' : '+'}
      </button>
      <div className="accordion-content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Questions;
