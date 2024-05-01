import JobReviews from "../../components/jobReviews/JobReviews";
import ProductReviews from "../../components/productReviews/ProductReviews";
import "./my_reviews.scss";

function My_reviews() {
  return (
    <div className="my-reviews">
      <h2>Aqui podras encontrar tus reseñas publicadas</h2>
      <ProductReviews />
      <JobReviews />
    </div>
  );
}

export default My_reviews;
