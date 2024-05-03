import axios from "axios";

import { useEffect, useState } from "react";
import "./manageProductReviews.scss";

function ManageProductReviews() {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });
  //definicion de funcion para realizar la peticion y listar las reseñas de productos pendientes
  const getPendingCustomerReviews = async () => {
    try {
      const res = await axiosInstance.get(
        "/server/manage-reviews/manage-customer-reviews"
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const [pendingCustomerReviews, setPendingCustomerReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getPendingCustomerReviews();
      setPendingCustomerReviews(reviews);
    };

    fetchReviews();
  }, []);

  return (
    <div className="pending-reviews">
      <div className="header">
        <div className="titulo">
          <h1>Gestion de reseñas de productos</h1>
        </div>
        <div className="subtitulo">
          <h3>
            Aqui encontraras todas las reseñas de productos pendientes por
            validar
          </h3>
        </div>
      </div>
      {console.log(pendingCustomerReviews)}

      {pendingCustomerReviews == null ? (
        <> </>
      ) : pendingCustomerReviews.length > 0 ? (
        <div className="container">
          <table className="table">
            <thead className="header-table">
              <tr className="titulos-tabla">
                <th>Id reseña</th>
                <th>Empresa</th>
                <th>Producto</th>
                <th>Reseña</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className="body-table">
              {pendingCustomerReviews &&
                pendingCustomerReviews.map((review) => (
                  <tr className="filas-tabla" key={review.idCustomer_Review}>
                    <td>{review.idCustomer_Review}</td>
                    <td>{review.Company_Name}</td>
                    <td>{review.Product_Name}</td>
                    <td>{review.Review_C}</td>
                    <div className="acctions">
                      <td>
                        <a className="accept" href="">
                          Aceptar
                        </a>
                      </td>
                      <td>
                        <a className="reject" href="">
                          Rechazar
                        </a>
                      </td>
                      <td>
                        <a className="link-company" href="">
                          Vincular empresa
                        </a>
                      </td>
                    </div>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="no-reviews">
          <h3>
            En este momento no hay reseñas de productos pendientes de validacion
          </h3>
        </div>
      )}
    </div>
  );
}

export default ManageProductReviews;
