import "./customerReviewsPage.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductReviews from "../../components/productReviews/ProductReviews";

function CustomerReviewsPage() {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });
  //definicion de funcion para realizar la peticion y listar las reseñas de productos
  const getCustomerReviews = async () => {
    try {
      const res = await axiosInstance.get("/server/postsc/");
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  //definicion de variable que guarda la lista de reseñas de producto obtenidas
  const [listProductReviews, setProductReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getCustomerReviews();
      setProductReviews(reviews);
    };

    fetchReviews();
  }, []);

  return (
    <div className="customer-reviews-page">
      <div className="header">
        <h2>Aqui puedes ver todas las reseñas de productos</h2>
      </div>
      {listProductReviews == null ? (
        <> </>
      ) : listProductReviews.length > 0 ? (
        <div className="container">
          <ProductReviews productReviews={listProductReviews} />
        </div>
      ) : (
        <div className="no-reviews">
          <h3>En este momento no hay reseñas de producto para visualizar.</h3>
        </div>
      )}
    </div>
  );
}

export default CustomerReviewsPage;
