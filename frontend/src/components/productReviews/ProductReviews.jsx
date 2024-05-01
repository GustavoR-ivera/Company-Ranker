import ProductReview from "../productReview/ProductReview";
import "./productReviews.scss";

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

const ProductReviews = () => {
  //Temporary

  const productReviews = [
    {
      id: 1,
      company: "Exito",
      product: "TV samsung",
      //date: "2022-01-01",
      description:
        "El producto es muy bueno, lo recomiendo, ahora puedo ver mis series en HD y disfrutar con mi familia",
      quality: <h2>{generateStars(4)}</h2>,
      price: <h2>{generateStars(3)}</h2>,
      service: <h2>{generateStars(3)}</h2>,
    },
    {
      id: 2,
      company: "Alkosto",
      product: "Xbox one",
      //date: "2022-01-01",
      description:
        "Excelente producto lo recomiendo, ahora puedo jugar y disfrutar con mi familia",
      quality: <h2>{generateStars(5)}</h2>,
      price: <h2>{generateStars(4)}</h2>,
      service: <h2>{generateStars(4)}</h2>,
    },
  ];

  return (
    <div className="productReviews">
      {productReviews.map((productReview) => (
        <ProductReview productReview={productReview} key={productReview.id} />
      ))}
    </div>
  );
};

export default ProductReviews;
