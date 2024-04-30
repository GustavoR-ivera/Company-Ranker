import ProductReview from "../productReview/ProductReview";
import "./productReviews.scss";

const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<span key={i} style={{ color: 'yellow' }}>&#9733;</span>);
        } else {
            stars.push(<span key={i} className="star">&#9734;</span>);
        }
    }
    return stars;
};

const ProductReviews = () => {
    //Temporary

    const productReviews = [
        {
            id: 1,
            company_name: "Rappi",
            product_name: "Frontend Developer",
            //date: "2022-01-01",
            comments: ["Good work environment", "Good salary"],
            quality_score: <h1>{generateStars(4)}</h1>,
            price_score: <h1>{generateStars(3)}</h1>,
            attention_score: <h1>{generateStars(4.3)}</h1>
        },
        {
            id: 2,
            company_name: "Rappij",
            product_name: "Backend Developer",
            //date: "2022-01-01",
            comments: ["Good work environme hbhnt", "Good salargjhy"],
            quality_score: <h1>{generateStars(5)}</h1>,
            price_score: <h1>{generateStars(4)}</h1>,
            attention_score: <h1>{generateStars(4)}</h1>
        },
    ];


    return <div className="productReviews">
        {productReviews.map((productReview, index) => (
            <ProductReview productReview={productReview} key={productReview.id} />
        ))}
    </div>
}

export default ProductReviews;