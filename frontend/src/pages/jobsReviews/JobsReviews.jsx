import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./jobsReviews.scss";
import NavBar from "../../components/navBar/NavBar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import Footer from "../../components/footer/Footer";
import ProductReviews from "../../components/productReviews/ProductReviews";
import JobReviews from "../../components/jobReviews/JobReviews.jsx"; // Asegúrate de que la capitalización sea correcta

function JobsReviews() {
  //validar que currentUser exista antes de acceder a sus atributos
  const { currentUser } = useContext(AuthContext);
  const [bandera, setBandera] = useState(false);
  
  function handleClick() {
    setBandera(!bandera);
  }

  return (
    <div>
      <NavBar/>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <LeftBar />
        <div className="jobsReviews">
          <div className="container">
            <h3>Reseñas laborales</h3>
            <JobReviews />
          </div>
        </div>
        <RightBar />
      </div>
      <Footer />
    </div>
  );
}

export default JobsReviews;