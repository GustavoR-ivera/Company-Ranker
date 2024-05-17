import "./leftBar.scss";
import industries from "../../images/industries.png";
import job from "../../images/job.png";
import news from "../../images/news.png";
import shop from "../../images/shop.png";
import trending from "../../images/trending.png";
import about from "../../images/about.png";
import contact from "../../images/contact.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

function LeftBar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <h3>Categorias</h3>

        {/* se valida el rol premium del usuario  */}
        {currentUser && currentUser.Role === "premium" && (
          <div className="menu">
            <span>Premium</span>

            <div className="item">
              {/**podria consultarse validando la cantidad de
               *  reseñas en un periodo de tiempo */}
              <img src={trending} alt="trending" />
              <Link to="/dashboard">Empresas tendencia</Link>
            </div>

            {/* <div className="item">
            <img src={news} alt="news" />
            <span>Noticias</span>
          </div> */}
          </div>
        )}

        <hr />
        {/* <div className="menu">
          <span>Mercado Comercial</span>
          {
            //podria consultarse las empresas con mejor valoracion
            currentUser && (
              <>
                <div className="item">
                  <img src={shop} alt="shop" />
                  <span>Empresas mejor valoradas</span>
                </div>
              </>
            )
          }

          <div className="item">
            <img src={industries} alt="industries" />
            <span>Ver sectores comerciales</span>
          </div>
        </div> */}

        <div className="menu">
          <span>Otros</span>
          <div className="item">
            <img src={contact} alt="job" />
            <Link to={"/registrar_comentario_soporte"}>Contáctanos</Link>
          </div>
          <div className="item">
            <img src={about} alt="salary" />
            <Link to={"/about"}>Quiénes somos</Link>
          </div>
          <div className="item">
            <img src={about} alt="salary" />
            <Link to={"/Questions"}>Preguntas Frecuentes</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBar;
