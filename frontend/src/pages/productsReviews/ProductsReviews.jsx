import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./productsReviews.scss";
import NavBar from "../../components/navBar/NavBar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import Footer from "../../components/footer/Footer";
import ProductReviews from "../../components/productReviews/ProductReviews";
function ProductsReviews() {
  //validar que currentUser exista antes de acceder a sus atributos
  const { currentUser } = useContext(AuthContext);
  const [bandera, setBandera] = useState(false);
  
  function handleClick() {
    setBandera(!bandera);
  }

  return (
    <div>
    <NavBar/>

    <div style={{ display: "flex" }}>
        <LeftBar />
    <div className="productsReviews">
      
    <div className="container">
      <h3>Reseñas de Productos</h3>
      <ProductReviews />

      </div>
    </div>
    <RightBar />
  </div>
  <Footer />
  </div>
  );
}

export default ProductsReviews;
