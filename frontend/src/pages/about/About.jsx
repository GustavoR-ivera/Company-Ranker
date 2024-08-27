import "./about.scss";
import NavBar from "../../components/navBar/NavBar.jsx";
import fotoGustavo from "../../images/fotoAboutGustavo.jpg";
import fotoDaniel from "../../images/fotoAboutDaniel.jpg";
import fotoJavier from "../../images/fotoAboutJavier.jpg";
import fotoCarlos from "../../images/fotoAboutCarlos.jpg";
import linkedin_logo from "../../images/linkedin.png";
import github_logo from "../../images/github.png";
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
            En company ranker agrupamos y validamos por medio de una plataforma
            las reseñas de los usuarios para la toma de decisiones con base en
            la experiencia de los trabajadores y compradores, y así ajustandonos
            a las tendencias del mercado brindamos visibilidad a las pymes
            colombianas.
          </p>
        </div>
        <div className="item">
          <span>Visión</span>
          <p>
            En el año 2028, Company Ranker se consolidará como el sitio web de
            reseñas preferido para las personas que busquen información sobre
            productos o cargos laborales de empresas colombianas. Nuestro
            liderazgo se basará en una comunidad sincera, ya que creemos
            firmemente en un mercado laboral transparente y honesto.{" "}
          </p>
        </div>

        <h3>Equipo</h3>
        <div className="team">
          <div className="member">
            <img className="foto_member" src={fotoGustavo} />
            <span>Gustavo Rivera</span>
            <p>Desarrollador de software</p>
            <div className="logos">
              <a
                href="https://www.linkedin.com/in/gustavo-rivera-b78977206/"
                target="_blank"
              >
                <img src={linkedin_logo} className="logo_linkedin" />
              </a>
              <a href="https://www.github.com/GustavoR-ivera" target="_blank">
                <img src={github_logo} className="logo_github" />
              </a>
            </div>
          </div>
          <div className="member">
            <img src={fotoDaniel} className="foto_member" />
            <span>Daniel Mateus</span>
            <p>Desarrollador de software</p>
            <div className="logos">
              <a
                href="https://www.linkedin.com/in/daniel-fernando-mateus-vega-465043139/"
                target="_blank"
              >
                <img src={linkedin_logo} className="logo_linkedin" />
              </a>
              <a href="https://www.github.com/" target="_blank">
                <img src={github_logo} className="logo_github" />
              </a>
            </div>
          </div>
          <div className="member">
            <img src={fotoCarlos} className="foto_member" />
            <span>Carlos Camacho</span>
            <p>Desarrollador de software</p>
            <div className="logos">
              <a
                href="https://www.linkedin.com/in/carlos-javier-camacho-cely-6a5199281/"
                target="_blank"
              >
                <img src={linkedin_logo} className="logo_linkedin" />
              </a>
              <a href="https://www.github.com/c2camacho" target="_blank">
                <img src={github_logo} className="logo_github" />
              </a>
            </div>
          </div>
          <div className="member">
            <img src={fotoJavier} className="foto_member" />
            <span>Javier Vargas</span>
            <p>Desarrollador de software</p>

            <div className="logos">
              <a
                href="https://www.linkedin.com/in/javier-santiago-vargas-parra-79672223a/"
                target="_blank"
              >
                <img src={linkedin_logo} className="logo_linkedin" />
              </a>
              <a href="https://www.github.com/JavierVargas0112" target="_blank">
                <img src={github_logo} className="logo_github" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
