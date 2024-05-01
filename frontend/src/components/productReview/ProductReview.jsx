import "./productReview.scss";
import React, { useEffect, useState } from "react";

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

  return (
    <div className="product-review-card">
      <div className="user-info">
        <div className="left">
          <img src="" alt="" />
          <span>username</span>
        </div>
        <div className="right">
          <span>
            {productReview.Created_At == null
              ? "fecha"
              : productReview.Created_At}
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
