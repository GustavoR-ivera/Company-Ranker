import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./jobReviews.scss";
import NavBar from "../../components/navBar/NavBar";
import LeftBar from "../../components/leftBar/LeftBar";
import RightBar from "../../components/rightBar/RightBar";
import Footer from "../../components/footer/Footer";
import JobReviews from "../../components/jobReview/JobReview";

function MisResenas() {
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
    <div className="jobReviews">
      
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

export default JobReviews;
