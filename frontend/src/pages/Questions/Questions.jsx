import "./questions.scss";
import NavBar from "../../components/navBar/NavBar.jsx";
import React from 'react';

function Questions() {
  return (
    <div className="faq-container">
      <NavBar />
      <div className="faq-list">
        <h1>Preguntas Frecuentes</h1>
        <Accordion title="¿Cómo puedo comenzar?" content="Para empezar, simplemente registrate para poder acceder a todas las funciones que company rank tiene para ti" />
        <Accordion title="¿Alguna empresa trabaja con ustedes o para ustedes?" content="En company Rank creemos que el trabajar con otra empresa puede afectar la confiabilidad de los usuarios por esto no tenemos empresas aliadas" />
        <Accordion title="¿Este proyecto es propio?" content="Los unicos creadores de company rank son las 4 personas que se encuentran en el apartados de quienes somos" />
        {/* Agrega más preguntas y respuestas aquí */}
      </div>
      <p className="footer-message">En Company Ranker valoramos lo que piensas</p>
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
