import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./home.scss";
import linkedin_blog from "../../images/linkedin_blog.png"
import businessColombia from "../../images/10_things_about_business_in_colombia.png"
import glassdoor from "../../images/glassdoor.png"
import comunidad_cr from "../../images/por_que_es_importante_la_comunidad_cr.png"
import bestPlacesToWork from "../../images/best_places_to_work_home_page.png"
import NewReview from "../../components/newReview/NewReview";
import { Helmet } from 'react-helmet';

function Home() {
  //validar que currentUser exista antes de acceder a sus atributos
  const { currentUser } = useContext(AuthContext);
  const [bandera, setBandera] = useState(false);
  
  function handleClick() {
    setBandera(!bandera);
  }

  return (
    <div className="home">
      <Helmet>
        <title>Inicio</title>
      </Helmet>
      <div className="banner1">
        <h2>¡Hola {currentUser == null ? "user " : currentUser.Name + "! "} 
         realiza tu aporte a esta comunidad registrando una 
        <button onClick={handleClick}>Nueva reseña</button></h2>
      </div>
      <div>
        <>
       { bandera && <NewReview />}
       </>
      </div>
      
    <div className="container">
      <h3>Consulta los temas que mas te interesen</h3>
      <div className="row">
      <div className="item">
          <img src={linkedin_blog} alt="img" />
          <span>Como mejorar la busqueda de empleo</span>
          <p>LinkedIn recomienda
          </p>
          <a href="https://www.linkedin.com/blog/member/career/tips-to-turbocharge-your-career-search" target="_blank">
            Leer más
          </a>

        </div>
        <div className="item">
          <img src={comunidad_cr} alt="img" />
          <span>¿Por qué es importante esta comunidad?</span>
          <p>En este articulo veràs la importancia de generar
            una comunidad basada en las experiencias personales
          </p>
          <a href="#" target="_blank">
            Leer màs
          </a>

        </div>
        <div className="item">
          <img src={glassdoor} alt="img" />
          <span>Best places to work by Glassdoor</span>
          <p>Revisa las compañias mejor valoradas
            segun el equipo de Glassdoor
          </p>
          <a href="https://www.glassdoor.com/blog/best-places-to-work-revealed/" target="_blank">
            Leer màs
          </a>

        </div>
      </div>
      <div className="row">
        <div className="item">
          <img src={businessColombia} alt="img" />
          <span>Realidades de hacer negocios en Colombia</span>
          <p>créditos: goldenharbors
          </p>
          <a href="https://goldenharbors.com/articles/doing-business-in-colombia" target="_blank">
            Leer màs
          </a>

        </div>
        <div className="item">
          <img src={bestPlacesToWork} alt="img" />
          <span>Best places to work by Glassdoor</span>
          <p>Revisa las compañias mejor valoradas
            segun el equipo de Glassdoor
          </p>
          <a href="https://www.glassdoor.com/blog/best-places-to-work-revealed/" target="_blank">
            Leer màs
          </a>

        </div>

      </div>
    </div>
  </div>

  );
}

export default Home;
