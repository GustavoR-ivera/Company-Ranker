import './productReview.scss';
import "../productReviews/ProductReviews.jsx";
import React from 'react';


//const [productReview, setProductReview] = useState([]);

/*const fetchData = async () => {
    const response = await fetch('https://your-api-domain.com/api/rappi-feedback');
    const data = await response.json();
    return data;
};*/
//const  product_review = () => ({review})
//const ProductReview = ({ id, company, jobTitle, description, workEnvironment, growthOpportunities, salary }) => {
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
                <div className="product_name">{productReview.product_name}</div>
                <div className="comments">{productReview.comments}</div>
            </div>
            <hr />
            <div className="attributes">
                <div className='quality_score'>Calidad:</div>
                <span>{productReview.quality_score}</span>
                <div className="price_score">Precio</div>
                <span>{productReview.price_score}</span>
            </div>
            <div className="attribute1">Atención</div>
            <span>{productReview.attention_score}</span>
            <div className="buttons">
                <button className="agree-button">De acuerdo</button>
                <button className="disagree-button">En desacuerdo</button>
            </div>

        </div>
    );
};
export default ProductReview;