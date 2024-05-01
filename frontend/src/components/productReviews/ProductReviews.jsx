import ProductReview from "../productReview/ProductReview";
import "./productReviews.scss";
import React, { useEffect, useState } from "react";

const ProductReviews = (props) => {
  return (
    <div className="productReviews">
      {props.productReviews.map((productReview) => (
        <ProductReview
          productReview={productReview}
          key={productReview.idCustomer_Review}
        />
      ))}
    </div>
  );
};

export default ProductReviews;
