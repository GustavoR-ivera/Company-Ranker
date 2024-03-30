
import "./about.scss";
import NavBar from "../../components/navBar/NavBar.jsx";
import fotoGustavo from "../../images/fotoAboutGustavo.jpg";
import linkedin_logo from "../../images/linkedin.png";


function About(props) {
  return (
    <div className="about">
      {/*enviamos user como parametro a navbar*/}
      <NavBar user = {props.user}/>

      <div className="container">
        <div className="item">
            <span>¿Quiénes somos?</span>
            <p>
            En Company Ranker mostramos la actualidad del pensamiento 
            de la gente sobre las pequeñas, medianas y grandes empresas 
            colombianas. Desde los clientes hasta los ex-empleados y trabajadores 
            actuales de las diversas empresas registradas hacen parte de esta 
            comunidad cuyos aportes son nuestro punto de partida sobre los cuales 
            trabajamos a diario para ofrecer información de calidad sobre 
            productos, servicios y contexto laboral en general, 
            debido a que estamos comprometidos por la verdad y
             la búsqueda de un mercado más justo.
            </p>
        </div>
        <div className="item">
            <span>Visión</span>
            <p>
            Para el 2026 seremos la primera elección para cualquier persona que busca 
            información sobre empresas colombianas porque seremos el destino principal 
            cuando una persona quiere tener una información objetiva y clara, 
            lideraremos una comunidad basada en la sinceridad porque creemos en un mercado 
            laboral transparente y honesto.
            </p>
        </div>

        <h3>Equipo</h3>
        <div className="team">
            <div className="member">
                <img 
                className="foto_member"
                src={fotoGustavo} />
                <span>Gustavo Rivera</span>
                <p>
                    Desarrollador de software
                </p>
                <a href="https://www.linkedin.com/in/gustavo-rivera-b78977206/"
                   target="_blank" >
                    <img src={linkedin_logo}
                        className="logo_linkedin" />
                </a>
            </div>
            <div className="member">
                <img 
                    src=""
                    className="foto_member" />
                <span>Daniel</span>
                <p>
                    Desarrollador de software
                </p>
                <a href="https://www.linkedin.com/"
                   target="_blank" >
                    <img src={linkedin_logo}
                        className="logo_linkedin" />
                </a>
            </div>
            <div className="member">
                <img 
                    src=""
                    className="foto_member" />                
                <span>Carlos</span>
                <p>
                    Desarrollador de software
                </p>
                <a href="https://www.linkedin.com/"
                   target="_blank" >
                    <img src={linkedin_logo}
                        className="logo_linkedin" />
                </a>
            </div>
            <div className="member">
                <img 
                    src=""
                    className="foto_member" />                
                <span>Javier</span>
                <p>
                    Desarrollador de software
                </p>
                <a href="https://www.linkedin.com/"
                   target="_blank" >
                    <img src={linkedin_logo}
                        className="logo_linkedin" />
                </a>
            </div>

        </div>
      </div>
    </div>
    );
  }

export default About;