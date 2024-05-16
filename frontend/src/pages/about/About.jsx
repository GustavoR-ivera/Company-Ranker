import "./about.scss";
import NavBar from "../../components/navBar/NavBar.jsx";
import fotoGustavo from "../../images/fotoAboutGustavo.jpg";
import fotoDaniel from "../../images/fotoAboutDaniel.jpg";
import fotoJavier from "../../images/fotoAboutJavier.jpg";
import fotoCarlos from "../../images/fotoAboutCarlos.jpg";
import linkedin_logo from "../../images/linkedin.png";
import Footer from "../../components/footer/Footer.jsx";

function About() {
  return (
    <div className="about">
      {/*enviamos user como parametro a navbar*/}
      <NavBar />

      <div className="container">
        <div className="item">
          <span>¿Quiénes somos?</span>
          <p>
            En el año 2026, Company Ranker se consolidará como el sitio web de reseñas
            preferido para las personas que busquen información sobre empresas colombianas, 
            Nuestro liderazgo se basará en una comunidad sincera, 
            ya que creemos firmemente en un mercado laboral transparente y honesto.{" "}
          </p>
        </div>
        <div className="item">
          <span>Visión</span>
          <p>
          En company ranker agrupamos y validamos por medio de una plataforma las reseñas de los usuarios para la toma de decisiones
          con base en la experiencia de los trabajadores y compradores, y así ajustandonos a las tendencias
          y visibilidad de las pymes en el mercado laboral colombiano
          </p>
        </div>

        <h3>Equipo</h3>
        <div className="team">
          <div className="member">
            <img className="foto_member" src={fotoGustavo} />
            <span>Gustavo Rivera</span>
            <p>Desarrollador de software</p>
            <a
              href="https://www.linkedin.com/in/gustavo-rivera-b78977206/"
              target="_blank"
            >
              <img src={linkedin_logo} className="logo_linkedin" />
            </a>
          </div>
          <div className="member">
            <img src={fotoDaniel} className="foto_member" />
            <span>Daniel</span>
            <p>Desarrollador de software</p>
            <a href="https://www.linkedin.com/" target="_blank">
              <img src={linkedin_logo} className="logo_linkedin" />
            </a>
          </div>
          <div className="member">
            <img src={fotoCarlos} className="foto_member" />
            <span>Carlos</span>
            <p>Desarrollador de software</p>
            <a href="https://www.linkedin.com/" target="_blank">
              <img src={linkedin_logo} className="logo_linkedin" />
            </a>
          </div>
          <div className="member">
            <img src={fotoJavier} className="foto_member" />
            <span>Javier</span>
            <p>Desarrollador de software</p>
            <a href="https://www.linkedin.com/" target="_blank">
              <img src={linkedin_logo} className="logo_linkedin" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
