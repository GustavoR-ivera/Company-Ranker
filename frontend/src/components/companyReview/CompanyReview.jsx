import { Link } from "react-router-dom";
import "./companyReview.scss";
import React, { useEffect, useState } from "react";
import logo_default from "../../images/logo.png";

const CompanyReview = ({ companyReview }) => {
  const generateStar = (filled) => {
    return (
      <span style={{ color: filled ? "yellow" : "black" }}>
        {filled ? "\u2605" : "\u2606"}
      </span>
    );
  };

  const [companyScore, setCompanyScore] = useState(null);
  //   const [logo, setLogo] = useState(logo_default);
  const companyLogo = companyReview.Company_logo;
  const logoPath = require(`../../images/${companyLogo}`);

  useEffect(() => {
    const generateSingleStar = () => {
      const starComponent = generateStar(true); // Monta una estrella llena
      setCompanyScore(starComponent);
    };
    generateSingleStar();
  }, []);

  return (
    <div className="Company-Review-Card">
      <div className="card-header">
        <div className="left"></div>
        <div className="right">
          <div className="companyScore">
            EmpresaScore: {companyReview.Avg_Score}
            {companyScore}
          </div>
        </div>
      </div>
      <div className="content">
        <div className="company-info">
          <img className="company-photo" src={logoPath} />
          <span className="company-name">Empresa: {companyReview.Name_C}</span>
        </div>
        <div className="description">
          <p>Descripcion: {companyReview.Description_C}</p>
        </div>
      </div>
      <div className="company-reviews">
        <Link to={`/resenas/resenas_por_empresa/${companyReview.idCompany}`}>
          Ver Reseñas
        </Link>
      </div>
    </div>
  );
};

export default CompanyReview;
