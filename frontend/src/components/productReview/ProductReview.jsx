import "./productReview.scss";
import React from "react";

//const [productReview, setproductReview] = useState([]);

/*const fetchData = async () => {
    const response = await fetch('https://your-api-domain.com/api/rappi-feedback');
    const data = await response.json();
    return data;
};*/
//const  product_review = () => ({review})
const ProductReview = ({ productReview }) => {
  return (
    <div className="product-review-card">
      <div className="user-info">
        <div className="left">
          <img src="" alt="" />
          <span>username</span>
        </div>
        <div className="right">
          <span>fecha</span>
        </div>
      </div>
      <div className="content">
        <div className="company">Empresa: {productReview.company}</div>
        <hr />

        <div className="product-name">
          <p>Producto: {productReview.product}</p>
        </div>
        <div className="description">
          <p>Descripcion: {productReview.description}</p>
        </div>

        <hr />
        <div className="attributes">
          <div className="attribute">
            <div>Quality score: </div>
            <div>{productReview.quality}</div>
          </div>
          <div className="attribute">
            <div>Price Score:</div>
            <div>{productReview.price}</div>
          </div>
          <div className="attribute">
            <div>Service Score:</div>
            <div>{productReview.service}</div>
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
