import "./productReview.scss";
import React, { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

const ProductReview = ({ productReview }) => {
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <span key={i} style={{ color: "yellow" }}>
            &#9733;
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star">
            &#9734;
          </span>
        );
      }
    }
    return stars;
  };
  const [Quality_Score, setQuality_Score] = useState(null);
  const [Price_Score, setPrice_Score] = useState(null);
  const [Service_Score, setService_Score] = useState(null);

  useEffect(() => {
    const stars = () => {
      const quality = generateStars(productReview.Quality_Score);
      const price = generateStars(productReview.Price_Score);
      const service = generateStars(productReview.Service_Score);
      setQuality_Score(quality);
      setPrice_Score(price);
      setService_Score(service);
    };
    stars();
  }, []);

  //def url base del servidor backend
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });

  //obtener informacion del usuario asociado a la reseña
  const getUser = async () => {
    try {
      const res = await axiosInstance.get(
        `/server/users/getUser/${productReview.User_idUser}`
      );
      //console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  const [user_review, setUser_review] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser_review(user);
    };

    fetchUser();
  }, []);

  return (
    <div className="product-review-card">
      <div className="user-info">
        <div className="left">
          <span>
            user:{" "}
            {user_review == null
              ? "user"
              : user_review.length > 0
              ? user_review[0].Name
              : "user"}
          </span>
        </div>
        <div className="right">
          <span>
            {productReview.Created_At == null
              ? "fecha"
              : moment(productReview.Created_At).fromNow()}
          </span>
        </div>
      </div>
      <div className="content">
        <div className="company">Empresa: {productReview.Company_Name}</div>
        <hr />

        <div className="product-name">
          <p>Producto: {productReview.Product_Name}</p>
        </div>
        <div className="description">
          <p>Descripcion: {productReview.Review_C}</p>
        </div>

        <hr />
        <div className="attributes">
          <div className="attribute">
            <div>Calidad: </div>
            <div>{Quality_Score}</div>
          </div>
          <div className="attribute">
            <div>Precio:</div>
            <div>{Price_Score}</div>
          </div>
          <div className="attribute">
            <div>Servicio:</div>
            <div>{Service_Score}</div>
          </div>
        </div>
      </div>
      <hr />

      <div className="buttons">
        <button className="agree-button">De acuerdo</button>
        <button className="disagree-button">En desacuerdo</button>
      </div>
    </div>
  );
};
export default ProductReview;
