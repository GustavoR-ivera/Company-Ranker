import './productReview.scss';
import "../productReviews/ProductReviews.jsx";
import React from 'react';
import like_button from "../../images/like_button.png";
import dislike_button from "../../images/dislike_button.png";


//const [productReview, setProductReview] = useState([]);

/*const fetchData = async () => {
    const response = await fetch('https://your-api-domain.com/api/rappi-feedback');
    const data = await response.json();
    return data;
};*/
//const  product_review = () => ({review})
const ProductReview = ({ productReview }) => {
    const company_name = productReview.company_name;
    const product_name = productReview.product_name;
    const comments = productReview.comments;
    const price_score = productReview.price_score;
    const quality_score = productReview.quality_score;
    const attention_score = productReview.attention_score;
    return (
        <div className="product-review-card">
            <div className="header">

                <div className="company_name">{productReview.company_name}</div>
            </div>
            <div className="content">
                <div className="product_name">Cargo: {productReview.product_name}</div>
                <div className="comments">Descripción: {productReview.comments}</div>
            </div>
            <hr />
            <div className="attributes">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div className='quality_score'>Calidad:</div>
                <span>{productReview.quality_score}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div className="price_score">Precio</div>
                <span>{productReview.price_score}</span>
                </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div className="atention_score">Atención:</div>
                <span>{productReview.attention_score}</span>
                </div>
            </div>
            <div className="buttons" style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="agree-button" style={{ display: "flex", alignItems: "center" }}>
                    <img src={like_button} style={{ marginRight: "5px", height: "20px", width: "20px" }} />
                    De acuerdo
                </button>
                <button className="disagree-button" style={{ display: "flex", alignItems: "center" }}>
                    <img src={dislike_button} style={{ marginRight: "5px", height: "20px", width: "20px" }} />
                    En desacuerdo
                </button>
            </div>
    
        </div>
    );
};
export default ProductReview;