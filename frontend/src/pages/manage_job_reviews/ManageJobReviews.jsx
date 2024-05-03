import axios from "axios";

import { useEffect, useState } from "react";
import "./manageJobReviews.scss";

function ManageJobReviews() {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });
  //definicion de funcion para realizar la peticion y listar las reseñas de productos pendientes
  const getPendingJobReviews = async () => {
    try {
      const res = await axiosInstance.get(
        "/server/manage-reviews/manage-job-reviews"
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const [pendingJobReviews, setPendingJobReviews] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getPendingJobReviews();
      setPendingJobReviews(reviews);
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

  const accept = async (idReview) => {
    await axiosInstance.get(
      `/server/manage-reviews/accept-job-review/${idReview}/${moderatorComments[idReview]}`
    );
  };

  return (
    <div className="pending-reviews">
      <div className="header">
        <div className="titulo">
          <h1>Gestion de reseñas laborales</h1>
        </div>
        <div className="subtitulo">
          <h3>
            Aqui encontraras todas las reseñas laborales pendientes por validar
          </h3>
        </div>
      </div>

      {pendingJobReviews == null ? (
        <> </>
      ) : pendingJobReviews.length > 0 ? (
        <div className="container">
          <table className="table">
            <thead className="header-table">
              <tr className="titulos-tabla">
                <th>Id reseña</th>
                <th>Empresa</th>
                <th>Cargo</th>
                <th>Reseña</th>
                <th>Comentarios</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody className="body-table">
              {pendingJobReviews &&
                pendingJobReviews.map((review) => (
                  <tr className="filas-tabla" key={review.idJob_review}>
                    <td>{review.idJob_review}</td>
                    <td>{review.Company_Name}</td>
                    <td>{review.Occupation}</td>
                    <td>{review.Review_J}</td>
                    <td>
                      <textarea
                        name="moderator_comments"
                        id=""
                        cols="15"
                        rows="3"
                        placeholder="Escribe aqui tus comentarios"
                        value={moderatorComments[review.idJob_review] || ""}
                        onChange={(e) =>
                          handleCommentChange(
                            review.idJob_review,
                            e.target.value
                          )
                        }
                      ></textarea>
                    </td>
                    <div className="acctions">
                      <td>
                        <a
                          className="accept"
                          onClick={accept(review.idJob_review)}
                          href=""
                        >
                          Aceptar
                        </a>
                      </td>
                      <td>
                        <a
                          className="reject"
                          href={`http://localhost:8800/server/manage-reviews/reject-job-review/${
                            review.idJob_review
                          }/${moderatorComments[review.idJob_review]}`}
                        >
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
            En este momento no hay reseñas laborales pendientes de validacion
          </h3>
        </div>
      )}
    </div>
  );
}

export default ManageJobReviews;
