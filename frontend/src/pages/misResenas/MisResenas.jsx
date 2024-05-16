import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import "./misResenas.scss";
import linkedin_blog from "../../images/linkedin_blog.png"
import businessColombia from "../../images/10_things_about_business_in_colombia.png"
import glassdoor from "../../images/glassdoor.png"
import comunidad_cr from "../../images/por_que_es_importante_la_comunidad_cr.png"
import bestPlacesToWork from "../../images/best_places_to_work_home_page.png"
import NewReview from "../../components/newReview/NewReview";
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
    <div className="misResenas">
      
    <div className="container">
      <h3>Reseñas que he hecho</h3>
      <JobReviews />

      </div>
    </div>
    <RightBar />
  </div>
  <Footer />
  </div>
  );
}

export default MisResenas;
