import axios from "axios";
import { useEffect, useState } from "react";
import JobReviews from "../../components/jobReviews/JobReviews";
import "./companyReviewsPage.scss";

function CompanyReviewsPage() {
  //definicion de funcion para realizar la peticion y listar las reseñas laborales
  const getJobReviews = async () => {
    try {
      const res = await axios.get("http://localhost:8800/server/postsj/");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //definicion de variable que guarda la lista de reseñas laborales obtenidas
  const [listJobReviews, setListJobReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getJobReviews();
      setListJobReviews(reviews);
    };

    fetchReviews();
  }, []);

  console.log(listJobReviews);

  return (
    <div className="company-reviews">
      <div className="header">
        <h2>Aqui puedes ver todas las empresas que estan en Company Rank</h2>
      </div>
      {listJobReviews == null ? (
        <> </>
      ) : listJobReviews.length > 0 ? (
        <div className="container">
          <JobReviews jobReviews={listJobReviews} />
        </div>
      ) : (
        <div className="no-reviews">
          <h3>En este momento no hay empresas en company rank.</h3>
        </div>
      )}
    </div>
  );
}

export default CompanyReviewsPage;
