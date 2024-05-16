import axios from "axios";

import { useEffect, useState } from "react";
import "./manageProductReviews.scss";
import { useNavigate } from "react-router-dom";

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

  const [moderatorComments, setModeratorComments] = useState({});
  const handleCommentChange = (id, comment) => {
    setModeratorComments((prevComments) => ({
      ...prevComments,
      [id]: comment,
    }));
    //console.log(moderatorComments);
  };

  const navigate = useNavigate();

  const accept = async (idReview) => {
    //console.log("mensaje0");

    try {
      const res = await axiosInstance.get(
        `/server/manage-reviews/accept-customer-review/${idReview}/${moderatorComments[idReview]}`
      );
      console.log("reseña aceptada", res);
      navigate("gestionar_resenas/resenas_productos");

      //window.location.reload();
    } catch (err) {
      console.error("error aceptando reseña", err);
    }
  };

  const reject = async (idReview) => {
    try {
      const res = await axiosInstance.get(
        `/server/manage-reviews/reject-customer-review/${idReview}/${moderatorComments[idReview]}`
      );
      console.log("reseña rechazada", res);
      navigate("gestionar_resenas/resenas_productos");

      //window.location.reload();
    } catch (err) {
      console.error("error al rechazar reseña", err);
    }
  };

  //metodo para asociar un id empresa a una reseña
  const linkCompany = async (id_review, id_company) => {
    if (isNaN(Number(id_company)) || id_company.trim() === "") {
      console.log("campo no numerico");
      return;
    } else {
      try {
        const res = await axiosInstance.get(
          `/server/manage-reviews/link-company-creview/${id_review}/${id_company}`
        );
        console.log("empresa asociada satisfactoriamente, ", res.data);
        alert("empresa asociada satisfactoriamente");
      } catch (err) {
        console.error("error asociando empresa a reseña, ", err);
        alert("error asociando empresa a reseña");
      }
    }
  };

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
                <th>Comentarios</th>
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
                    <td>
                      <textarea
                        name="moderator_comments"
                        id=""
                        cols="15"
                        rows="3"
                        placeholder="Escribe aqui tus comentarios"
                        value={
                          moderatorComments[review.idCustomer_Review] || ""
                        }
                        onChange={(e) =>
                          handleCommentChange(
                            review.idCustomer_Review,
                            e.target.value
                          )
                        }
                      ></textarea>
                    </td>
                    <div className="acctions">
                      <td>
                        <button
                          className="accept"
                          onClick={() => accept(review.idCustomer_Review)}
                        >
                          Aceptar
                        </button>
                      </td>
                      <td>
                        <button
                          className="reject"
                          onClick={() => reject(review.idCustomer_Review)}
                        >
                          Rechazar
                        </button>
                      </td>
                      <td>
                        <button
                          className="link-company"
                          onClick={() => {
                            const idCompany = prompt(
                              "Ingresa el id de la empresa"
                            );
                            console.log(idCompany);
                            idCompany == null
                              ? alert("operacion cancelada")
                              : linkCompany(
                                  review.idCustomer_Review,
                                  idCompany
                                );
                          }}
                        >
                          Vincular empresa
                        </button>
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
