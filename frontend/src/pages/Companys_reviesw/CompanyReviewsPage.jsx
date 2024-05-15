import axios from "axios";
import { useEffect, useState } from "react";
import CompanyReviews from "../../components/companyReviews/CompanyReviews";
import "./companyReviewsPage.scss";

function CompanyReviewsPage() {
  //definicion de funcion para realizar la peticion y listar las reseñas laborales
  const getCompanyReviews = async () => {
    try {
      const res = await axios.get("http://localhost:8800/server/companys/");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  //definicion de variable que guarda la lista de reseñas laborales obtenidas
  const [listCompanyReviews, setListCompanyReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getCompanyReviews();
      setListCompanyReviews(reviews);
    };

    fetchReviews();
  }, []);

  console.log(listCompanyReviews);
  

  return (
    <div className="company-reviews">
      <div className="header">
        <h2>Aqui puedes ver todas las empresas que estan en Company Rank</h2>
      </div>
      {listCompanyReviews == null ? (
        <> </>
      ) : listCompanyReviews.length > 0 ? (
        <div className="container">
          <CompanyReviews CompanyReviews={listCompanyReviews} />
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
