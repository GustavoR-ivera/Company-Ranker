import CompanyReview from "../companyReview/CompanyReview";
import "./companyReviews.scss";
import React, { useEffect, useState } from "react";

const CompanyReviews = (props) => {
  return (
    <div className="companyReviews">
      {props.CompanyReviews.map((companyReview) => (
        <CompanyReview
          companyReview={companyReview}
          key={companyReview.idcompany_Review}
        />
      ))}
    </div>
  );
};

export default CompanyReviews;