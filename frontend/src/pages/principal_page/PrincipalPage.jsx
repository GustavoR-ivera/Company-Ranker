import "./principalPage.scss";
import NavBar from "../../components/navBar/NavBar.jsx";
import LeftBar from "../../components/leftBar/LeftBar.jsx";
import RightBar from "../../components/rightBar/RightBar.jsx";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext.js";
import Footer from "../../components/footer/Footer.jsx";
import company_ppage from "../../images/company_ppage.png";
import product_ppage from "../../images/product_ppage.png";
import community_ppage from "../../images/community_ppage.png";
import trending_ppage from "../../images/trending_ppage.png";
import { Link } from "react-router-dom";

function PrincipalPage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <NavBar />

      <div style={{ display: "flex" }}>
        <LeftBar />
        {/*componente principal page*/}
        <div className="principalPage">
          <div className="banner1">
            <h1>Una comunidad surgida a partir de tus experiencias</h1>
            <p>
              Somos la opción indicada para que las personas encuentren
              información verificada y de calidad sobre el producto que desean
              comprar o sobre la empresa en la que desean trabajar basandose en
              la experiencia de trabajadores y compradores en el mercado laboral
              colombiano.
            </p>
            <img src={community_ppage} alt="company_ppage" />
            <p> Consulta la guìa de inicio ràpido en el siguiente link:</p>
            <a
              target="blank"
              href="https://drive.google.com/file/d/1whnHhO5hDOvw34wpN0WTC5vS9owQJGPC/view?usp=drive_link"
            >
              ¿Còmo funciona?
            </a>
          </div>
          <div className="banner2">
            <h3>Encuentra la información que buscas en Company Ranker</h3>
            <p>
              Busca información verificada y de calidad sobre el producto que
              deseas comprar o sobre la empresa en la que deseas trabajar
            </p>
            <div className="imgs">
              <img src={product_ppage} alt="product_ppage" />
              <img src={company_ppage} alt="company_ppage" />
            </div>
          </div>
          <div className="banner3">
            <h3>Consulta las últimas novedades en el mercado comercial</h3>
            <p>
              Visualiza las reseñas compartidas por la comunidad y anímate a
              publicar las tuyas también
            </p>
            <img src={trending_ppage} alt="trending_ppage" />
          </div>
        </div>

        <RightBar />
      </div>

      <Footer />
    </div>
  );
}

export default PrincipalPage;
