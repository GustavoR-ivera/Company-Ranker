import JobReviews from "../../components/jobReviews/JobReviews";
import ProductReviews from "../../components/productReviews/ProductReviews";
import "./my_reviews.scss";
import { AuthContext } from "../../context/authContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

function My_reviews() {
  //acceder a currentUser del contexto
  const { currentUser } = useContext(AuthContext);

  //def url base del servidor backend
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });
  //definicion de funcion para realizar la peticion y listar las reseñas de productos del usuario
  const getCustomerReviews = async () => {
    try {
      const res = await axiosInstance.get(
        `/server/postsc/getUserReviews/${currentUser.idUser}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  //definicion de variable que guarda la lista de reseñas de producto obtenidas
  const [listProductReviews, setProductReviews] = useState(null);

  //definicion de funcion para realizar la peticion y listar las reseñas laborales del usuario
  const getJobReviews = async () => {
    try {
      const res = await axiosInstance.get(
        `/server/postsj/getUserReviews/${currentUser.idUser}`
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  //definicion de variable que guarda la lista de reseñas laborales obtenidas
  const [listJobReviews, setJobReviews] = useState(null);

  //invocar funciones al momento de renderizar componente
  useEffect(() => {
    const fetchReviews = async () => {
      const reviewsC = await getCustomerReviews();
      setProductReviews(reviewsC);

      const reviewsJ = await getJobReviews();
      setJobReviews(reviewsJ);
    };

    fetchReviews();
  }, []);

  return (
    <div className="my-reviews">
      <div className="header">
        <h2>Aqui puedes ver todas tus reseñas publicadas</h2>
      </div>
      {/* listar reseñas de producto del usuario */}
      {listProductReviews == null ? (
        <> </>
      ) : listProductReviews.length > 0 ? (
        <div className="container">
          <ProductReviews productReviews={listProductReviews} />
        </div>
      ) : (
        <></>
      )}
      {/* listar reseñas laborales del usuario */}
      {listJobReviews == null ? (
        <> </>
      ) : listJobReviews.length > 0 ? (
        <div className="container">
          <JobReviews jobReviews={listJobReviews} />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default My_reviews;
